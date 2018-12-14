"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const __1 = require("../../");
const div = styled_components_1.default.div;
const p = styled_components_1.default.p;
const Mark = p `
  {
    font-size: x-large;
    height: 100%;
    display: inline-block;
  }
`;
const MarkNegative = styled_components_1.default(Mark) `
  &&& {
    color: red;
  }
`;
const MarkPositive = styled_components_1.default(Mark) `
  &&& {
    color: green;
  }
`;
const MarkNeutral = styled_components_1.default(Mark) `
  &&& {
    color: orange;
  }
`;
const StudentMarkStyle = div `
  {
    height: 100%;
    display: inline-block;
  }
`;
class StudentMark extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mark: __1.store.getState().notifier.score,
            message: ''
        };
        __1.store.subscribe(() => {
            console.log(__1.store.getState().notifier.score);
            if (__1.store.getState().notifier.score !== this.state.mark) {
                this.setState({
                    mark: __1.store.getState().notifier.score,
                });
            }
        });
    }
    render() {
        const Par = this.getStyle();
        return (React.createElement("div", { style: { textAlign: 'center' } },
            React.createElement(StudentMarkStyle, null,
                React.createElement(Par, null,
                    this.state.mark,
                    " ",
                    this.state.message))));
    }
    getStyle() {
        if (this.state.mark > 100) {
            return null;
        }
        if (this.state.mark > 75) {
            return MarkPositive;
        }
        if (this.state.mark > 60) {
            return MarkNeutral;
        }
        if (this.state.mark > 0) {
            return MarkNegative;
        }
        return '';
    }
}
exports.StudentMark = StudentMark;
//# sourceMappingURL=StudentMark.js.map