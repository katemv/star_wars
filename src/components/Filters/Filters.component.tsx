import React, {useEffect, memo} from 'react';
import {useCallbackOne} from "use-memo-one";

import {HomeActionsContext, HomeStateContext} from "../../providers/HomeProvider";
import {Character} from "../../store/Home/HomeTypes";
import {
  Container,
  FilterTitle,
  FiltersContainer,
  FilterItem,
  FilterRow,
} from './styles';

const Filters = () => {
  const { updateFilmFilter, updateSpeciesFilter, updateFilteredList } = HomeActionsContext();
  const { state: { characters, filmFilter, speciesFilter, films, species } } = HomeStateContext();
  const { data: list } = characters;

  const filterByField = (charList: Character[], selectedFiltersList: string[], filterField: 'films' | 'species') => {

    if(selectedFiltersList.length > 0) {

      charList = list.filter(char => {
        let found = true;

        selectedFiltersList.forEach(el => {
          if (!char[filterField].includes(el)) {

            found = false;
          }
        });

        return found;
      });

    }

    return charList;
  };


  const filterList = useCallbackOne(() => {

    if (filmFilter.length === 0 && speciesFilter.length === 0) {
      updateFilteredList({ data:[] });

      return;
    }

    let newCharList: Character[] = [];

    newCharList = filterByField(newCharList, filmFilter, 'films');
    newCharList = filterByField(newCharList, speciesFilter, 'species');

    updateFilteredList({ data: newCharList });

  }, [list, filmFilter, speciesFilter]);

  useEffect(() => {
    filterList();
  }, [filmFilter, filterList]);


  return (
    <Container>
      <FilterRow>
        <FilterTitle>Appeared in</FilterTitle>
        <FiltersContainer>
          {films.data.length > 0 && films.data.map(({title, episode_id, url}) => (
            <FilterItem
              key={episode_id}
              onClick={() => updateFilmFilter({value: url})}
              $isSelected={filmFilter.includes(url)}
            >
              {title}
            </FilterItem>
          ))}
        </FiltersContainer>
      </FilterRow>

      <FilterRow>
        <FilterTitle>Species</FilterTitle>
        <FiltersContainer>
          {species.data.length > 0 && species.data.map(({name, url}, index) => (
            <FilterItem
              key={index}
              onClick={() => updateSpeciesFilter({value: url})}
              $isSelected={speciesFilter.includes(url)}
            >
              {name}
            </FilterItem>
          ))}
        </FiltersContainer>
      </FilterRow>

    </Container>
  )
};

export default memo(Filters);
