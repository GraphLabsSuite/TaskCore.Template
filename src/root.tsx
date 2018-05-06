import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import { store } from './redux/store';
import { TaskTemplate } from './components/TaskTemplate/TaskTemplate';

const updateRender = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} key="provider">
        <TaskTemplate />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

updateRender();
if ((module as any).hot) {
  (module as any).hot.accept();
}