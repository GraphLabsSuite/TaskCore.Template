import * as React from 'react';
import { ToolButtonList } from '../ToolButtonList';
import styles from './TaskToolbar.module.css';

export class TaskToolbar extends React.Component {
    public render() {
        const Buttons = this.getButtonList();
        return (
            <div>
                <div className={styles.Title}>Панель инструментов</div>
                <Buttons />
            </div>);
    }

    public getButtonList() {
        return ToolButtonList;
    }
}
