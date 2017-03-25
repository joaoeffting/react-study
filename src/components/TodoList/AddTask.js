// @flow

import React, { Component } from 'react';

type Props = {
    onAddTask: (text: string) => void
}

class AddTask extends Component {
    props: Props;

    state: {
        task: string
    }

    onAddTask: () => void;

    constructor(props: Props) {
        super(props);
        this.state = {
            task: ''
        }
    }
    onAddTask = () => {
        this.props.onAddTask(this.state.task);
        this.setState({task: ''});
    }
    render() {
        let {task} = this.state;
        return (
            <div className="container" id="app-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="input-group">
                            <div className="input-group-addon"><span>Type some task</span></div>
                            <input className="form-control" type="text" value={task} onChange={(e) => this.setState({task: e.currentTarget.value})} />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.onAddTask}>Save </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

AddTask.propTypes = {
    onAddTask: React.PropTypes.func.isRequired
}

export default AddTask;