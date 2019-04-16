
import {IMatrixAction} from "../../types/IMatrixAction";
import {IMatrixView} from "../../models/matrix";

export const FILL_MATRIX: string = 'matrix/FILL_MATRIX';

export const matrixActionsCreators = {
    fillMatrix: function (matrix: IMatrixView): IMatrixAction {
        return {
            type: FILL_MATRIX,
            matrix: matrix
        };
    }
}
