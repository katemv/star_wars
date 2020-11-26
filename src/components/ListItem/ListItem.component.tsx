import React from 'react';
import {Draggable} from "react-beautiful-dnd";

import {StyledListItem} from "./styles";
import {ComponentProps} from './types';

const ListItem = ({ character, index, onClick }: ComponentProps) => {
  return (
    <Draggable draggableId={character.id} index={index}>
      {provided => (
        <StyledListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={onClick}
        >
          {character.name}
        </StyledListItem>
      )}
    </Draggable>
  )
};

export default ListItem;
