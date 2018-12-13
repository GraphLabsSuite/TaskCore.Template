import { IIntersectionActionPairs } from '../../types/IIntersectionAction';
export declare const ADD_INTERSECTION: string;
export declare const REMOVE_INTERSECTION: string;
export declare const intersectionActionCreators: {
    addIntersection(vertexOne: string, vertexTwo: string): IIntersectionActionPairs;
    removeIntersection(vertexOne: string, vertexTwo: string): IIntersectionActionPairs;
};
