import React from 'react';

import {
    Character,
    Film,
    HomeActionType,
    MainContentType,
    SetIsDraggingAction,
    Spaceship,
    Species,
    UpdateCharacterListAction,
    UpdateFavouritesList,
    UpdateFilmAction,
    UpdateFilmListAction,
    UpdateFilteredList,
    UpdateMainContentTypeAction,
    UpdateSpaceshipListAction,
    UpdateSpeciesAction,
    UpdateSpeciesListAction,
} from './HomeTypes';

export const updateFilmFilter = (dispatch: React.Dispatch<UpdateFilmAction>) => (payload: { value: string }) => {
    dispatch({
        type: HomeActionType.UpdateFilmFilter,
        payload: { ...payload },
    });
};

export const updateSpeciesFilter = (dispatch: React.Dispatch<UpdateSpeciesAction>) => (payload: { value: string }) => {
    dispatch({
        type: HomeActionType.UpdateSpeciesFilter,
        payload: { ...payload },
    });
};

export const updateMainContentType = (dispatch: React.Dispatch<UpdateMainContentTypeAction>) => async (payload: {
        type: MainContentType,
        data: Character | null,
    }) => {

    dispatch({
        type: HomeActionType.UpdateMainContentType,
        payload: { ...payload },
    });
};

export const updateFilmList = (dispatch: React.Dispatch<UpdateFilmListAction>) => (payload: { data: Film[] }) => {
    dispatch({
        type: HomeActionType.UpdateFilmList,
        payload: { ...payload },
    });
};

export const updateSpaceshipList = (dispatch: React.Dispatch<UpdateSpaceshipListAction>) => (payload: { data: Spaceship[] }) => {
    dispatch({
        type: HomeActionType.UpdateSpaceshipList,
        payload: { ...payload },
    });
};

export const updateSpeciesList = (dispatch: React.Dispatch<UpdateSpeciesListAction>) => (payload: { data: Species[] }) => {
    dispatch({
        type: HomeActionType.UpdateSpeciesList,
        payload: { ...payload },
    });
};

export const updateCharacterList = (dispatch: React.Dispatch<UpdateCharacterListAction>) => (payload: { data: Character[] }) => {
    dispatch({
        type: HomeActionType.UpdateCharacterList,
        payload: { ...payload },
    });
};

export const setIsDragging = (dispatch: React.Dispatch<SetIsDraggingAction>) => (payload: { value: boolean }) => {
    dispatch({
        type: HomeActionType.SetIsDragging,
        payload: { ...payload },
    });
};

export const updateFavouritesList = (dispatch: React.Dispatch<UpdateFavouritesList>) => (payload: { data: Character[] }) => {
    dispatch({
        type: HomeActionType.UpdateFavouritesList,
        payload: { ...payload },
    });
};

export const updateFilteredList = (dispatch: React.Dispatch<UpdateFilteredList>) => (payload: { data: Character[] }) => {
    dispatch({
        type: HomeActionType.UpdateFilteredList,
        payload: { ...payload },
    });
};
