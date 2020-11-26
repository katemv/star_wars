import React from 'react';
import {Character, MainContentType} from "../../store/Home/HomeTypes";
import ListItem from "../ListItem";
import {ComponentProps} from "./types";
import {Droppable} from "react-beautiful-dnd";
import {Container} from './styles';
import {HomeActionsContext} from "../../providers/HomeProvider";


const List = ({list, droppableId}: ComponentProps) => {

  const {updateMainContentType} = HomeActionsContext();

  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => {
        return (
          <Container
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {
              list && list.length > 0 && list.map((character: Character, index: number) => (
                <ListItem
                  character={character}
                  index={index}
                  key={character.url}
                  onClick={() => updateMainContentType({
                      type: MainContentType.DETAILS,
                      data: character,
                    })
                  }
                />
              ))
            }
            {provided.placeholder}
          </Container>
        )
      }}
    </Droppable>
  )
};


export default List;
