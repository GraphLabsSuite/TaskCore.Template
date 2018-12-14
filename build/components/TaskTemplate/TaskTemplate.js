"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const GraphVisualizer_1 = require("../GraphVisualizer/GraphVisualizer");
const TaskToolbar_1 = require("../TaskToolbar/TaskToolbar");
const TaskConsole_1 = require("../TaskConsole/TaskConsole");
const graphlabs_core_graphs_1 = require("graphlabs.core.graphs");
const StudentMark_1 = require("../StudentMark/StudentMark");
const rootAction_1 = require("../../redux/rootAction");
const styled_components_1 = require("styled-components");
const react_1 = require("react");
require("bootstrap/dist/css/bootstrap.css");
const __1 = require("../../");
const bluebird_1 = require("bluebird");
global.Promise = bluebird_1.Promise;
const BorderedDiv = styled_components_1.default.div `
  {
    box-shadow:2px 2px 11px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow:2px 2px 11px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    background: #fffaf0;
  }
`;
const GraphCell = BorderedDiv.extend `
  {
    position: fixed;
    left: 15%;
    top: 1%;
    width: 62%;
    height: 78%;
  }
`;
const ToolCell = BorderedDiv.extend `
  {
     position: fixed;
    left: 1%;
    top: 1%;
    width: 12%;
    height: 78%;
  }
`;
const TaskCell = BorderedDiv.extend `
  {
    position: fixed;
    left: 79%;
    top: 1%;
    width: 20%;
    height: 78%;
  }
`;
const LeftBottom = BorderedDiv.extend `
  {
    position: fixed;
    left: 1%;
    top: 80%;
    width: 12%;
    height: 19%;
  }
`;
const LowRow = BorderedDiv.extend `
  {
    position: fixed;
    left: 15%;
    top: 80%;
    width: 84%;
    height: 19%;
  }
`;
const div = styled_components_1.default.div;
const App = div `
  {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
const MainRow = styled_components_1.default.div `
  {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 80%;
  }
`;
class TaskTemplate extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: __1.store.getState().app.status,
        };
        __1.store.subscribe(() => {
            if (__1.store.getState().app.status !== this.state.status) {
                this.setState({
                    status: __1.store.getState().app.status,
                });
            }
        });
        this.task = this.task.bind(this);
        this.getTaskToolbar = this.getTaskToolbar.bind(this);
    }
    componentWillMount() {
        const data = sessionStorage.getItem('variant');
        let graph;
        if (data) {
            graph = this.graphManager(data);
        }
        else {
            graph = graphlabs_core_graphs_1.GraphGenerator.generate(5);
        }
        graph.vertices.forEach(v => this.dispatch(rootAction_1.actionsCreators.addVertex(v.name)));
        graph.edges.forEach(e => this.dispatch(rootAction_1.actionsCreators.addEdge(e.vertexOne.name, e.vertexTwo.name)));
    }
    render() {
        const Task = this.task();
        const Toolbar = this.getTaskToolbar();
        return (React.createElement(App, { id: "wrap" }, this.state.status
            ? React.createElement("p", null, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E. \u041E\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u043E\u0442\u0432\u0435\u0442\u0430 \u043E\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430...")
            : (React.createElement("div", null,
                React.createElement(MainRow, null,
                    React.createElement(GraphCell, null,
                        React.createElement(GraphVisualizer_1.GraphVisualizer, null)),
                    React.createElement(TaskCell, null,
                        React.createElement("p", null, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435"),
                        React.createElement(Task, null)),
                    React.createElement(ToolCell, null,
                        React.createElement(Toolbar, null))),
                React.createElement(LeftBottom, null,
                    React.createElement(StudentMark_1.StudentMark, null)),
                React.createElement(LowRow, null,
                    React.createElement(TaskConsole_1.TaskConsole, null))))));
    }
    graphManager(data) {
        const graphData = JSON.parse(data);
        const { vertices, edges } = graphData.data[0];
        const graph = new graphlabs_core_graphs_1.Graph();
        vertices.forEach((v) => {
            graph.addVertex(new graphlabs_core_graphs_1.Vertex(v));
        });
        edges.forEach((e) => {
            graph.addEdge(new graphlabs_core_graphs_1.Edge(graph.getVertex(e.source)[0], graph.getVertex(e.target)[0]));
        });
        return graph;
    }
    getTaskToolbar() {
        return TaskToolbar_1.TaskToolbar;
    }
    task() {
        return () => React.createElement("p", null, "\u042D\u0442\u043E \u043F\u0443\u0441\u0442\u043E\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0437\u0430\u0434\u0430\u043D\u0438\u044F");
    }
    dispatch(action) {
        __1.store.dispatch(action);
        return void 0;
    }
}
exports.TaskTemplate = TaskTemplate;
//# sourceMappingURL=TaskTemplate.js.map