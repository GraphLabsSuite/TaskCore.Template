import {IMatrixView} from '../..';
import {FILL_MATRIX} from './actions';
import {IMatrixActionFill} from "../../types/IMatrixAction";

const initialState: IMatrixView = [];

export default (state: IMatrixView = initialState, action: IMatrixActionFill): IMatrixView => {
    switch (action.type) {
        case FILL_MATRIX:
            return action.matrix;
        default:
            return state;
    }
};
