// @flow

import React from 'react';
import Task from './Task';

type Props = {
    tasks: Array<any>, 
    onDone: (id: number, 
    checked: boolean) => void, 
    onRemove: (id: number) => void
}

const Tasks = ({tasks, onDone, onRemove} : Props) => {
    return (
        <div className="container">
            <div className="panel panel-default todo-panel">
                <div className="panel-heading">
                    <h3 className="text-nowrap panel-title">Lista de tarefas</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        {
                            tasks.map((task) => {
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