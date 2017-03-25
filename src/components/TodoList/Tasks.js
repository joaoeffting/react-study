// @flow

import React from 'react';
import Task from './Task';

const Tasks = ({tasks, onDone, onRemove} : {tasks: Array<Task>, onDone: (id: number, checked: boolean) => void, onRemove: (id: number) => void}) => {
    return (
        <div className="container">
            <div className="panel panel-default todo-panel">
                <div className="panel-heading">
                    <h3 className="text-nowrap panel-title">Lista de tarefas</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        {
                            tasks.map((task: Task) => {
                                return(
                                    <Task
                                        key={task.id}
                                        id={task.id}
                                        text={task.text}
                                        done={task.done}
                                        onDone={onDone}
                                        onRemove={onRemove}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

Tasks.propTypes = {
    tasks: React.PropTypes.array.isRequired,
    onDone: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired
}

export default Tasks;