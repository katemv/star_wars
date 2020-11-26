import {Character, Film, HomeReducerState, MainContentType, Spaceship, Species} from "../store/Home/HomeTypes";

export interface HomeProviderProps {
    children?: any;
}
export interface IHomeStateContext {
    state: HomeReducerState;
}
export interface IHomeActionsContext {
    updateFilmFilter: (payload: { value: string }) => void;
    updateSpeciesFilter: (payload: { value: string }) => void;
    updateMainContentType: (payload: { type: MainContentType, data: Character | null }) => void;
    updateCharacterList: (payload: { data: Character[] }) => void;
    updateFilmList: (payload: { data: Film[] }) => void;
    updateSpaceshipList: (payload: { data: Spaceship[] }) => void;
    updateSpeciesList: (payload: { data: Species[] }) => void;
    setIsDragging: (payload: { value: boolean }) => void;
    updateFavouritesList: (payload: { data: Character[] }) => void;
    updateFilteredList: (payload: { data: Character[] }) => void;
}


