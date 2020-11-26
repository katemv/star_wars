import React from 'react';

import {HomeActionsContext, HomeStateContext} from "../../providers/HomeProvider";
import {MainContentType} from "../../store/Home/HomeTypes";
import {Container, Label, Value, BackButton} from './styles';


const CharacterDetails = () => {
  const {
    state: {
      characterDetails,
      species,
      spaceships,
      films,
    }
  } = HomeStateContext();

  const { updateMainContentType } = HomeActionsContext();

  const getItemByUrl = <T extends any[]> (list: T, url: string): any => {
    return list.find((el:any) => el.url === url) || null;
  };

  return (
    <Container>
      <BackButton
        onClick={() => updateMainContentType({
          type: MainContentType.LIST,
          data: null,
        })}
      >
        {'< back to all characters'}
      </BackButton>
      {characterDetails && (
        <>
          <div>
            <Label>Species</Label>
            {characterDetails.species.length > 0 ? (
              <>
                {characterDetails.species.map((speciesUrl, index) => {
                  const item = getItemByUrl(species.data, speciesUrl);

                  return (
                    <Value key={index}>
                      {item && item.name}
                    </Value>
                  )
                })}
              </>
            ) : (
              <>-</>
            )}
          </div>

          <div>
            <Label>Movies</Label>
            {characterDetails.films.length > 0 ? (
              <>
                {characterDetails.films.map((filmUrl, index) => {
                  const item = getItemByUrl(films.data, filmUrl);

                  return (
                    <Value key={index}>
                      {item && item.title}
                    </Value>
                  )
                })}
              </>
            ) : (
              <>-</>
            )}
          </div>

          <div>
            <Label>Spaceships</Label>
            {characterDetails.starships.length > 0 ? (
              <>
                {characterDetails.starships.map((spaceshipUrl, index) => {
                  const item = getItemByUrl(spaceships.data, spaceshipUrl);

                  return (
                    <Value key={index}>
                      {item && item.name}
                    </Value>
                  )
                })}
              </>
            ) : (
              <>-</>
            )}
          </div>
        </>
      )}
    </Container>
  )
};

export default CharacterDetails;
