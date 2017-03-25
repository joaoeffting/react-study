// @flow

import React, { Component } from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';

type Task = {
    id: number,
    text: string,
    done: boolean
}

class Todo extends Component {
    
    state: {
        tasks: Array<Task>,
    }

    onTaskRemove: (id: number) => void;
    onAddTask: (text: string) => void;
    onDone: (id: number, checked: boolean) => void;

    constructor() {
        super();
        this.state = {
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

        this.onTaskRemove = (id) => {
            let tasks = this.state.tasks.filter(task => task.id != id);
            this.setState({tasks});
        }
        this.onAddTask = (text) => {
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
        this.onDone = (id, checked) => {
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