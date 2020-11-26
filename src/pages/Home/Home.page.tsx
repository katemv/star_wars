import React, {memo, useEffect, useState} from 'react';
import {DragDropContext, DropResult} from "react-beautiful-dnd";
import {useCallbackOne} from "use-memo-one";

import Favourites from '../../components/Favourites';
import CharacterDetails from '../../components/CharacterDetails';
import CharactersList from '../../components/CharactersList';
import Layout from '../../components/Layout';
import {HomeActionsContext, HomeStateContext} from "../../providers/HomeProvider";
import {Character, Film, MainContentType, Spaceship, Species} from "../../store/Home/HomeTypes";
import {api, fetchData} from "../../server";
import {getUniqueID} from "../../utils/getUniqueId";

export const MAIN_DRAG_SOURCE_ID = 'main_list';
export const FAV_DRAG_SOURCE_ID = 'favourites_list';

interface IFetchDataResponse<T> {
  next: string;
  ok: boolean;
  results: T[];
}

const Home = () => {
  const {
    state: {
      mainContentType,
      characterDetails,
      characters,
      films,
      species,
      spaceships,
      favourites,
    }
  } = HomeStateContext();
  const [nextCharacterUrl, setNextCharacterUrl] = useState(api.baseUrl + api.paths.people);
  const [nextFilmUrl, setNextFilmUrl] = useState(api.baseUrl + api.paths.films);
  const [nextSpeciesUrl, setNextSpeciesUrl] = useState(api.baseUrl + api.paths.species);
  const [nextSpaceshipUrl, setNextSpaceshipUrl] = useState(api.baseUrl + api.paths.starships);

  const detailsHeading = characterDetails ? characterDetails.name : '';

  const {
    updateCharacterList,
    updateFilmList,
    updateSpeciesList,
    updateSpaceshipList,
    setIsDragging,
    updateFavouritesList,
  } = HomeActionsContext();

  const fetchCharactersList = useCallbackOne(async (url: string) => {
    const response = await fetchData<IFetchDataResponse<Character>>(url);

    const mappedResponse = response.results.map(el => ({
      ...el,
      id: getUniqueID(),
    }));

    updateCharacterList({ data: [...characters.data, ...mappedResponse] });
    setNextCharacterUrl(response.next);

  }, [characters]);

  const fetchFilmList = useCallbackOne(async (url: string) => {
    const response = await fetchData<IFetchDataResponse<Film>>(url);

    updateFilmList({ data: [...films.data, ...response.results] });
    setNextFilmUrl(response.next);

  }, [films]);

  const fetchSpeciesList = useCallbackOne(async (url: string) => {
    const response = await fetchData<IFetchDataResponse<Species>>(url);

    updateSpeciesList({ data: [...species.data, ...response.results] });
    setNextSpeciesUrl(response.next);

  }, [species]);

  const fetchSpaceshipsList = useCallbackOne(async (url: string) => {
    const response = await fetchData<IFetchDataResponse<Spaceship>>(url);

    updateSpaceshipList({ data: [...spaceships.data, ...response.results] });
    setNextSpaceshipUrl(response.next);

  }, [spaceships]);

  const onDragEnd = (props: DropResult) => {
    setIsDragging({value: false});

    const isDropping = props.destination?.droppableId === FAV_DRAG_SOURCE_ID &&
      props.source.droppableId === MAIN_DRAG_SOURCE_ID;

    const droppedItem = characters.data.find((el) => el.id === props.draggableId);


    if (isDropping && droppedItem) {
      const droppedItemExists = favourites.findIndex((el) => el.url === droppedItem.url) !== -1;

      if(!droppedItemExists) {
        const updatedDroppedItem = {
          ...droppedItem,
          id: 'fav_' + droppedItem.id
        };

        localStorage.setItem('favourites', JSON.stringify([...favourites, updatedDroppedItem]));

        updateFavouritesList({ data: [...favourites, updatedDroppedItem] });
      }
    }

  };

  useEffect(() => {
    if (nextCharacterUrl) {
      fetchCharactersList(nextCharacterUrl);
    }

  }, [nextCharacterUrl]);

  useEffect(() => {
    if (nextSpeciesUrl) {
      fetchSpeciesList(nextSpeciesUrl);
    }
  }, [nextSpeciesUrl]);

  useEffect(() => {
    if (nextSpaceshipUrl) {
      fetchSpaceshipsList(nextSpaceshipUrl);
    }
  }, [nextSpaceshipUrl]);

  useEffect(() => {
    if (nextFilmUrl) {
      fetchFilmList(nextFilmUrl);
    }
  }, [nextFilmUrl]);

  useEffect(() => {
    const item = localStorage.getItem('favourites');

    if(item) {
      const itemJS = JSON.parse(item);

      updateFavouritesList({ data: itemJS });
    }

  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Layout
        mainHeading={mainContentType === MainContentType.LIST ? 'Characters' : detailsHeading}
        sideHeading={'Favourites'}
        mainContent={mainContentType === MainContentType.LIST ? <CharactersList /> : <CharacterDetails />}
        sideContent={<Favourites />}
      />
    </DragDropContext>
  )
};

export default memo(Home);
