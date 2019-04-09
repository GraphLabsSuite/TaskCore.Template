import {IMatrixView} from "../models/matrix";

export interface IMatrixAction {
    type: string;
    matrix: IMatrixView;
}

export const matrixAction = 'matrixAction';