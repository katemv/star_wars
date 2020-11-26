/* REDUCER STATE */

export interface HomeReducerState {
    filmFilter: string[];
    speciesFilter: string[];
    mainContentType: MainContentType;
    characterDetails: Character | null;
    isDragging: boolean;
    favourites: Character[];
    filteredList: Character[];
    films: {
        loading: boolean;
        data: Film[];
    };
    spaceships: {
        loading: boolean;
        data: Spaceship[];
    };
    species: {
        loading: boolean;
        data: Species[];
    };
    characters: {
        loading: boolean;
        data: Character[];
    };
}

/* ACTION TYPES */

export enum HomeActionType {
    UpdateFilmFilter = 'UPDATE_FILM_FILTER',
    UpdateSpeciesFilter = 'UPDATE_SPECIES_FILTER',
    UpdateMainContentType = 'UPDATE_MAIN_CONTENT_TYPE',
    UpdateFilmList = 'UPDATE_FILM_LIST',
    UpdateSpaceshipList = 'UPDATE_SPACESHIP_LIST',
    UpdateSpeciesList = 'UPDATE_SPECIES_LIST',
    UpdateCharacterList = 'UPDATE_CHARACTER_LIST',
    SetIsDragging = 'SET_IS_DRAGGING',
    UpdateFavouritesList = 'UPDATE_FAVOURITES_LIST',
    UpdateFilteredList = 'UPDATE_FILTERED_LIST',
}

/* ACTIONS */

export interface UpdateFilmAction {
    type: HomeActionType.UpdateFilmFilter;
    payload: {
        value: string;
    }
}

export interface UpdateSpeciesAction {
    type: HomeActionType.UpdateSpeciesFilter;
    payload: {
        value: string;
    }
}

export interface UpdateMainContentTypeAction {
    type: HomeActionType.UpdateMainContentType;
    payload: {
        type: MainContentType;
        data: Character | null;
    }
}

export interface UpdateFilmListAction {
    type: HomeActionType.UpdateFilmList;
    payload: {
        data: Film[];
    }
}

export interface UpdateSpaceshipListAction {
    type: HomeActionType.UpdateSpaceshipList;
    payload: {
        data: Spaceship[];
    }
}

export interface UpdateSpeciesListAction {
    type: HomeActionType.UpdateSpeciesList;
    payload: {
        data: Species[];
    }
}

export interface UpdateCharacterListAction {
    type: HomeActionType.UpdateCharacterList;
    payload: {
        data: Character[];
    }
}

export interface SetIsDraggingAction {
    type: HomeActionType.SetIsDragging;
    payload: {
        value: boolean;
    }
}

export interface UpdateFavouritesList {
    type: HomeActionType.UpdateFavouritesList;
    payload: {
        data: Character[];
    }
}

export interface UpdateFilteredList {
    type: HomeActionType.UpdateFilteredList;
    payload: {
        data: Character[];
    }
}


/* FIELD TYPES */

export interface Character {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
    id: string;
}

export interface Film {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
}

export interface Species {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string | null;
    language: string;
    people: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export interface Spaceship {
    name: string;
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    films: string[];
    pilots: string[];
    url: string;
    created: string;
    edited: string;
}

export enum MainContentType {
    LIST = 'LIST',
    DETAILS = 'DETAILS',
}


export type HomeActions = UpdateFilmAction | UpdateSpeciesAction | UpdateMainContentTypeAction |
  UpdateFilmListAction | UpdateSpaceshipListAction | UpdateSpeciesListAction | UpdateCharacterListAction |
  SetIsDraggingAction | UpdateFavouritesList | UpdateFilteredList;

export type HomeReducer = (state: HomeReducerState, action: HomeActions) => HomeReducerState;
