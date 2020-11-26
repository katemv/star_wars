import {HomeActions, HomeActionType, HomeReducer, HomeReducerState, MainContentType} from './HomeTypes';

export const homeInitialState: HomeReducerState = {
    filmFilter: [],
    speciesFilter: [],
    mainContentType: MainContentType.LIST,
    characterDetails: null,
    isDragging: false,
    favourites: [],
    filteredList: [],
    films: {
        loading: false,
        data: [],
    },
    spaceships: {
        loading: false,
        data: [],
    },
    species: {
        loading: false,
        data: [],
    },
    characters: {
        loading: false,
        data: [],
    },
};

export const homeReducer: HomeReducer = ( state = homeInitialState, action: HomeActions ): HomeReducerState => {
    const updateFilter = (array: string[], newValue: string) => {
        const itemExists = array.findIndex(item => item === newValue) !== -1;

        let newFilmFilters = array;

        if (itemExists) {
            newFilmFilters = array.filter(item => item !== newValue);
        } else {
            newFilmFilters = [...array, newValue]
        }

        return newFilmFilters;
    };

    switch (action.type) {
        case HomeActionType.UpdateFilmFilter:

            const newFilmFilters = updateFilter(state.filmFilter, action.payload.value);

            return {
                ...state,
                filmFilter: newFilmFilters
            };
        case HomeActionType.UpdateSpeciesFilter:

            const newSpeciesFilters = updateFilter(state.speciesFilter, action.payload.value);

            return {
                ...state,
                speciesFilter: newSpeciesFilters
            };

        case HomeActionType.UpdateMainContentType:
            return {
                ...state,
                mainContentType: action.payload.type,
                characterDetails: action.payload.data,
            };
        case HomeActionType.UpdateFilmList:
            return {
                ...state,
                films: {
                    ...state.films,
                    data: action.payload.data
                },
            };
        case HomeActionType.UpdateSpaceshipList:
            return {
                ...state,
                spaceships: {
                    ...state.spaceships,
                    data: action.payload.data
                },
            };
        case HomeActionType.UpdateSpeciesList:
            return {
                ...state,
                species: {
                    ...state.species,
                    data: action.payload.data
                },
            };
        case HomeActionType.UpdateCharacterList:
            return {
                ...state,
                characters: {
                    ...state.characters,
                    data: action.payload.data
                },
            };
        case HomeActionType.SetIsDragging:
            return {
                ...state,
                isDragging: action.payload.value,
            };
        case HomeActionType.UpdateFavouritesList:
            return {
                ...state,
                favourites: action.payload.data,
            };
        case HomeActionType.UpdateFilteredList:
            return {
                ...state,
                filteredList: action.payload.data,
            };
        default:
            return state;
    }
};
