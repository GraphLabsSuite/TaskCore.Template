import * as React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import store from "./store";
import {TaskTemplate} from "./TaskTemplate/TaskTemplate";

ReactDOM.render(
  <Provider store={store} key="provider">
    <TaskTemplate />
  </Provider>,
  document.getElementById("root"),
);