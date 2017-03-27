// @flow

import React, { Component } from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';

type State = {
    tasks: Array<any>,
}

class Todo extends Component {
    state: State = {
        tasks: [
            {
                id: 1,
                text: 'Study React',
                done: true
            },
            {
                id: 2,
                text: 'Study Flow',
                done: false
            }
        ]
    }

    onTaskRemove = (id: number) => {
        let tasks = this.state.tasks.filter(task => task.id != id);
        this.setState({tasks});
    }
    onAddTask = (text: string) => {
        let tasks = [
            ...this.state.tasks,
            {
                id: Date.now(),
                text,
                done: false
            }
        ];

        this.setState({tasks});
    }
    onDone = (id: number, checked: boolean) => {
        let tasks = this.state.tasks.map(task => {
            if (task.id == id) {
                return {
                    ...task,
                    done: checked
                }
            }
            return task;
        });

        this.setState({tasks})
    }
    render() {
        let {tasks} = this.state;
        return (
            <div>
                <AddTask
                    onAddTask={this.onAddTask}
                />
                <Tasks
                    tasks={tasks}
                    onDone={this.onDone}
                    onRemove={this.onTaskRemove}
                />
            </div>
        );
    }
}

export default Todo;