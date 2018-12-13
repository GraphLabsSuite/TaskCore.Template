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

1. initialize your repository
`create-react-app my-app —scripts-version=react-scripts-ts`
2. add to `public/images` folder default images
3. Extend your application from TaskTemplate
```javascript
import { TaskTemplate } from 'graphlabs.core.template';
class App extends TaskTemplate {
}
```
6. Now you can develop your task module by overriding field in the template and adding your custom logic.