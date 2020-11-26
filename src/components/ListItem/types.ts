import {Character} from "../../store/Home/HomeTypes";

export interface ComponentProps {
  character: Character;
  index: number;
  onClick: () => void;
}
