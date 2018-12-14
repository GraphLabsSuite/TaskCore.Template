"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
function typedConnect(
// And "capture" the return of mapStateToProps
mapStateToProps, 
// As well as the return of mapDispatchToProps.
// Or in case you use the shorthand literal syntax, capture it as is.
mapDispatchToProps) {
    // We combine all generics into the inline component we'll declare.
    return function componentImplementation(component) {
        // Finally, we double assert the real connect to let us do anything we want.
        // And export a component that only takes OwnProps.
        return react_redux_1.connect(mapStateToProps, mapDispatchToProps)(component);
    };
}
exports.typedConnect = typedConnect;
//# sourceMappingURL=typedConnect.js.map