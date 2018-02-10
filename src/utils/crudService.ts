import { all } from 'redux-saga/effects';
import { sagaService } from 'redux-saga-crud-service';
import { addAction, IStudentAction } from "graphlabs.core.notifier";

export default function* () {
  yield all([
    sagaService('TaskConsole', addAction)
  ]);
}