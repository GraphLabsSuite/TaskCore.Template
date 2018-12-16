// import { Actions as GraphActions } from "./graph/actions";
import {graphActionsCreators} from "./graph/actions";
import {intersectionActionCreators} from './intersection/actions';

// export type RootAction =
//   GraphActions[keyof GraphActions];
export const actionsCreators : any = {
    ...graphActionsCreators,
    ...intersectionActionCreators,
}