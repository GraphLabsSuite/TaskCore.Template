import { IIntersectionPairsView } from '../../models/intersection';
import { IIntersectionActionPairs} from '../../types/IIntersectionAction';
export const ADD_INTERSECTION: string = 'intersection/ADD_INTERSECTION';
export const REMOVE_INTERSECTION: string = 'intersection/REMOVE_INTERSECCTION'

export const intersectionActionCreators = {
    addIntersection(vertexOne : string, vertexTwo : string) : IIntersectionActionPairs {
        return{
            type : ADD_INTERSECTION,
            payload : { vertexOne, vertexTwo } as IIntersectionPairsView
        };
    },
    removeIntersection(vertexOne : string, vertexTwo: string): IIntersectionActionPairs{
        return{
            type: REMOVE_INTERSECTION,
            payload: {vertexOne, vertexTwo} as IIntersectionPairsView
        }
    }
};