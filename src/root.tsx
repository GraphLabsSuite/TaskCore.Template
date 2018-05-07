import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';

import { TaskTemplate } from './components/TaskTemplate/TaskTemplate';

console.log(process.env);

const updateRender = () => {
  ReactDOM.render(
    <AppContainer>
      <TaskTemplate />
    </AppContainer>,
    document.getElementById('root'),
  );
};

updateRender();
if ((module as any).hot) {
  (module as any).hot.accept();
}