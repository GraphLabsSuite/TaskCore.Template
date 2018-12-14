"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const graphlabs_core_notifier_1 = require("graphlabs.core.notifier");
const ToolButton_1 = require("../ToolButton/ToolButton");
const styled_components_1 = require("styled-components");
const store_1 = require("../../redux/store");
const react_1 = require("react");
const actions_1 = require("../../redux/app/actions");
const Tooltip_1 = require("../Tooltip/Tooltip");
const ButtonList = styled_components_1.default.div `
  {
    display: block;
  }
`;
const taskId = 1; // TODO: get it from somewhere
const sessionGuid = 'uuid'; // TODO: get it from somewhere
class ToolButtonList extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.hide = this.hide.bind(this);
    }
    componentWillMount() {
        this.toolButtons = {};
    }
    render() {
        return this.getList();
    }
    help() {
        return 'Test help example';
    }
    beforeComplete() {
        return Promise.resolve({ success: true, fee: 0 });
    }
    dispatch(payload) {
        if (process.env.NODE_ENV === 'production') {
            graphlabs_core_notifier_1.addAction(payload).then(res => store_1.store.dispatch(res));
        }
        else {
            store_1.store.dispatch(graphlabs_core_notifier_1.addPlainAction(payload));
        }
        return void 0;
    }
    hide() {
        this.setState({
            show: false,
        });
    }
    setDefaultButtonList() {
        const setImg = (title) => `http://gl-backend.svtz.ru:5000/odata/downloadImage(name='${title}.png')`;
        let list = {};
        list[setImg('Help')] = () => {
            this.dispatch({
                message: 'Help required',
                taskId,
                sessionGuid,
                isTaskFinished: false,
                fee: 0,
                datetime: Date.now(),
            });
            this.setState({
                show: true,
            });
        };
        list[setImg('Complete')] = () => {
            this.beforeComplete().then(res => {
                this.dispatch({
                    message: `Task is done (${res.fee})`,
                    taskId,
                    sessionGuid,
                    isTaskFinished: false,
                    fee: res.fee,
                    datetime: Date.now(),
                });
                if (res.success) {
                    this.dispatch({
                        message: 'Task is checked',
                        taskId,
                        sessionGuid,
                        isTaskFinished: true,
                        fee: res.fee,
                        datetime: Date.now(),
                    });
                    store_1.store.dispatch(actions_1.actionsCreators.setStatus(true));
                }
            });
        };
        return list;
    }
    getList() {
        const result = [];
        const defaultList = this.setDefaultButtonList();
        for (const key in defaultList) {
            if (defaultList.hasOwnProperty(key)) {
                result.push(React.createElement("div", { key: key },
                    React.createElement(ToolButton_1.ToolButton, { path: key, listener: defaultList[key] })));
            }
        }
        for (const key in this.toolButtons) {
            if (this.toolButtons.hasOwnProperty(key)) {
                result.push(React.createElement(ToolButton_1.ToolButton, { key: key, path: key, listener: this.toolButtons[key] }));
            }
        }
        return (React.createElement("div", { ref: i => {
                this.bound = i;
            } },
            React.createElement(Tooltip_1.default, { value: this.help(), show: this.state.show, bound: this.bound, showTooltip: this.hide }),
            React.createElement(ButtonList, null, result)));
    }
}
exports.ToolButtonList = ToolButtonList;
//# sourceMappingURL=ToolButtonList.js.map