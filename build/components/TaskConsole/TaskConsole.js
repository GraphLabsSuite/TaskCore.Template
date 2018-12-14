"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const react_1 = require("react");
const __1 = require("../../");
const Console = styled_components_1.default.div `
  {
    height: 100%;
    display: inline-block;
  }
`;
class TaskConsole extends react_1.Component {
    get actions() {
        const state = __1.store.getState();
        __1.store.subscribe(() => {
            let flag = false;
            __1.store.getState().notifier.studentActions.forEach((e, i) => {
                if (this._action[i] !== e) {
                    flag = true;
                }
            });
            if (flag) {
                this._action = __1.store.getState().notifier.studentActions;
                this.forceUpdate();
            }
        });
        this._action = [...state.notifier.studentActions];
        return this._action;
    }
    render() {
        const actions = this.actions.map((i, index) => {
            const nData = i.datetime;
            let date = new Date(nData);
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let message = i.message;
            let result = hours + ':' + minutes + ':' + seconds + '  : ' + message;
            return React.createElement("div", { key: index }, result);
        });
        // This is the rest of console
        return (React.createElement(Console, null, actions));
    }
}
exports.TaskConsole = TaskConsole;
//# sourceMappingURL=TaskConsole.js.map