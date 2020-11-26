import {HomeProviderProps, IHomeActionsContext, IHomeStateContext} from './types';
import {homeReducer, homeInitialState} from '../store/Home/HomeReducer';
import {HomeReducer} from '../store/Home/HomeTypes';
import React, {useMemo, useReducer} from 'react';
import createCtx from '../utils/createCtx';
import {
    updateFilmFilter,
    updateSpeciesFilter,
    updateMainContentType,
    updateCharacterList,
    updateFilmList,
    updateSpaceshipList,
    updateSpeciesList,
    setIsDragging,
    updateFavouritesList,
    updateFilteredList,
} from '../store/Home/HomeActions';

const [stateContext, StateProvider] = createCtx<IHomeStateContext>();
const [actionsContext, ActionsProvider] = createCtx<IHomeActionsContext>();

function HomeProvider(props: HomeProviderProps): React.ReactElement {
    const [state, dispatch] = useReducer<HomeReducer>(homeReducer, homeInitialState);

    const actions = useMemo(
        () => ({
          updateFilmFilter: updateFilmFilter(dispatch),
          updateSpeciesFilter: updateSpeciesFilter(dispatch),
          updateMainContentType: updateMainContentType(dispatch),
          updateCharacterList: updateCharacterList(dispatch),
          updateFilmList: updateFilmList(dispatch),
          updateSpaceshipList: updateSpaceshipList(dispatch),
          updateSpeciesList: updateSpeciesList(dispatch),
          setIsDragging: setIsDragging(dispatch),
          updateFavouritesList: updateFavouritesList(dispatch),
          updateFilteredList: updateFilteredList(dispatch),
        }), []
    );

    return (
        <StateProvider value={{state:state}}>
            <ActionsProvider value={actions}>
                {props.children}
            </ActionsProvider>
        </StateProvider>
    );
}

export {
    stateContext as HomeStateContext,
    actionsContext as HomeActionsContext,
    HomeProvider,
};
