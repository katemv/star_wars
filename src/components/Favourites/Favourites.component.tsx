import React, {memo} from 'react';

import {HomeStateContext} from "../../providers/HomeProvider";
import {FAV_DRAG_SOURCE_ID} from "../../pages/Home/Home.page";
import {Container} from './styles';
import List from "../List";

const Favourites = () => {
  const {state: {favourites}} = HomeStateContext();

  return (
    <Container>
      <List
        list={favourites}
        droppableId={FAV_DRAG_SOURCE_ID}
      />
    </Container>
  )
};

export default memo(Favourites);
