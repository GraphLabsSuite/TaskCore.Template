"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var rootReducer_1 = require("./rootReducer");
var graphlabs_core_notifier_1 = require("graphlabs.core.notifier");
graphlabs_core_notifier_1.init({
    protocol: 'http',
    host: 'gl-backend.svtz.ru',
    port: 5000,
    path: 'odata/taskVariantLogs'
});
function configureStore(initialState) {
    var middlewares = [
        redux_thunk_1.default,
    ];
    var store = redux_1.createStore(rootReducer_1.default, initialState, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware.apply(void 0, middlewares)));
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept(['./counter', './graph', './intersection'], function () {
            store.replaceReducer(rootReducer_1.default);
        });
    }
    return store;
}
exports.configureStore = configureStore;
exports.store = configureStore();
//# sourceMappingURL=store.js.map