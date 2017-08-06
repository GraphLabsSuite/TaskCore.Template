import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from "react-hot-loader";
import {Provider} from "react-redux";

import {App} from "./containers/App";
import {configureStore} from "./redux/store";

const store = configureStore();

function updateRender() {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} key="provider">
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}

updateRender();
if ((module as any).hot) {
  (module as any).hot.accept();
}
