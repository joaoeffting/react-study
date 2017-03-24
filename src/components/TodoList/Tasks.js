import React from 'react';
import Task from './Task';

const Tasks = ({tasks, onDone, onRemove}) => {
    return (
        <div className="container">
            <div className="panel panel-default todo-panel">
                <div className="panel-heading">
                    <h3 className="text-nowrap panel-title">Lista de tarefas</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        {
                            tasks.map(task => {
                                let {id, text, done} = task;
                                return(
                                    <Task
                                        key={id}
                                        id={id}
                                        text={text}
                                        done={done}
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