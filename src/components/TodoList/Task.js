// @flow

import React from 'react';
import './task.css';

const Task = ({id, text, done, onDone, onRemove} : {id: number, text: string, done: boolean, onDone: (id: number, checked: boolean) => void, onRemove: (id: number) => void}) => {
    let panelClass = "panel panel-default item-todo";
    if (done) panelClass += " task-done"
    else panelClass += " task-undone";
    return (
        <div className="col-md-3">
            <div className={panelClass}>
                <div className="panel-body task-body">
                    <div className="row">
                        <div className="col-md-12"><span>{text}</span></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            
                        </div>
                    </div>
                    <div className="panel-footer task-footer">
                        <div className="row">
                            <div className="col-md-6">
                                <input type="checkbox" defaultChecked={done} onChange={(e) => onDone(id, e.currentTarget.checked)} />
                            </div>
                            <div className="col-md-6">
                                <a 
                                    href="#"
                                    onClick={() => onRemove(id)}
                                >
                                    <i className="icon ion-android-delete"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

Task.propTypes = {
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    done: React.PropTypes.bool.isRequired,
    onDone: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired
}

export default Task;