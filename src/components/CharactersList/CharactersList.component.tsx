import React, {memo} from 'react';

import Filters from "../Filters";
import List from "../List";
import {HomeStateContext} from "../../providers/HomeProvider";
import {MAIN_DRAG_SOURCE_ID} from "../../pages/Home/Home.page";

const CharactersList = () => {
  const { state: { characters, filmFilter, speciesFilter, filteredList } } = HomeStateContext();
  const { data: list } = characters;

  const filtersSelected = filmFilter.length > 0 || speciesFilter.length > 0;
  const listToShow = filtersSelected ? filteredList : list;

  return (
    <>
      <Filters />
      <List list={listToShow} droppableId={MAIN_DRAG_SOURCE_ID}/>
    </>
  );
};

export default memo(CharactersList);
