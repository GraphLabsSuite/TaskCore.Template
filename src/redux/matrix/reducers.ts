import {IMatrixView} from "../../models/matrix";
import {
    FILL_MATRIX
} from "./actions";
import {IMatrixAction} from "../../types/IMatrixAction";

const initialState: IMatrixView = [[]];

export default (state: IMatrixView = initialState, action: IMatrixAction): IMatrixView => {
    switch(action.type){
        case FILL_MATRIX:
            let max = 12;
            let min = 10;
            let newSize = state.length + Math.floor(Math.random() * (max - min)) + min;
            let newArr: IMatrixView = new Array(newSize);
            for(var i = 0; i < newSize; i++) {
                newArr[i] = new Array(newSize);
            }
            for(var i = 0; i < newArr.length; i++) {
                for (var j = 0; j < newArr.length; j++){
                    if(i<=j) {
                        newArr[i][j] = Math.floor(Math.random() * 2); //случайное число: 1 или 0
                    }
                    else{
                        newArr[i][j] = newArr[j][i];
                    }
                }
            }
            return newArr;
        default:
            return state;
    }
}
