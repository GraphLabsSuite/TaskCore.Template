import { IIntersectionPairs } from '../../models/graph';
import { IGraphActionIntersection} from '../../types/IGraphAction';
export const ADD_INTERSECTION: string = 'intersection/ADD_INTERSECTION';
export const REMOVE_INTERSECTION: string = 'intersection/REMOVE_INTERSECCTION'

export const intersectionActionCreators = {
    addIntersection(vertexOne : string, vertexTwo : string) : IGraphActionIntersection {
        return{
            type : ADD_INTERSECTION,
            payload : { vertexOne, vertexTwo } as IIntersectionPairs
        };
    },
    removeIntersection(vertexOne : string, vertexTwo: string): IGraphActionIntersection{
        return{
            type: REMOVE_INTERSECTION,
            payload: {vertexOne, vertexTwo} as IIntersectionPairs
        }
    }
};