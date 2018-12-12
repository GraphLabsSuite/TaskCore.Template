import { IIntersectionView} from '../../models/intersection';
import {
    ADD_INTERSECTION,
    REMOVE_INTERSECTION
} from './actions';
import {IIntersectionActionPairs} from '../../types/IIntersectionAction';

const initialIntersection : IIntersectionView = {
    pairs: []
}

export default (state: IIntersectionView = initialIntersection, action: IIntersectionActionPairs) : IIntersectionView => {
    switch (action.type){
        case ADD_INTERSECTION:
            return{
                pairs: [
                    ...state.pairs,
                    (<IIntersectionActionPairs> action).payload
                ],
            };
        case REMOVE_INTERSECTION:
            return {
                pairs: [
                    ...state.pairs
                        .filter( p => p.vertexOne !== (<IIntersectionActionPairs> action).payload.vertexOne
                            && p.vertexTwo !== (<IIntersectionActionPairs> action).payload.vertexTwo ),
                ]
            };
        default:
            return state;
    }
};