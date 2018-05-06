# GraphLabsSuite.Core.Template
Task template for graphlabs web project

### For contributors
* install Node, npm/yarn, WebStorm/Intellij IDEA
* look at package.json file to see how to run tests and the application
* do not forget to update version before publishing
* while contributing, write maximum comments
* add specification tags of JSDoc to every function and class you have created
* seek to write tests over every functionality you adds to the module

### Installation

* npm install graphlabs.core.template

### Extend the template

1. create-react-app my-app —scripts-version=react-scripts-ts
2. cp images ./public/images // тут пока не понял как автоматизировать
3. npm i —save redux react-redux
4. add store to your appliction:

```javascript
import { configureStore } from 'graphlabs.core.template';
import { Provider } from 'react-redux'; 
const store = configureStore(); 
ReactDOM.render( 
  <Provider store={store}> 
    <App /> 
  </Provider>, 
  document.getElementById('root') as HTMLElement 
);
```
5. Extend your application from TaskTemplate
```javascript
import { TaskTemplate } from 'graphlabs.core.template';
class App extends TaskTemplate {
  render() {
    return super.render(); // default view of the application
  }
}
```

6. Now you can develop your task module.