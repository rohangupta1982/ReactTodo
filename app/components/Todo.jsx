var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');

var Todo = React.createClass({
    onStatusChange: function () {
        var {id,dispatch} = this.props;
        dispatch(actions.todoCompleteActionGenerator(id));
        //this.props.onStatusChange(this.props.id);
    },
    render: function () {
        var {id, text, isComplete, createdOn, completedOn} = this.props;
        console.log(id + ',' + isComplete);
        var todoClassName = isComplete ? 'todo todo-completed' : 'todo';

        var renderDate = function () {
            var message = 'Created on';
            var timestamp = moment(createdOn).format('MMM Do YYYY @ hh:mm A')

            if (isComplete) {
                message = 'Completed on';
                timestamp = moment(completedOn).format('MMM Do YYYY @ hh:mm A')
            }

            return `${message} ${timestamp}`;
        };

        return (
            <div>
                <label className={todoClassName}>
                    <div>
                        <input type="checkbox" ref="isComplete" checked={isComplete} onChange={this.onStatusChange}/>
                    </div>
                    <div>
                        <p>{text}</p>
                        <p className="todo__subtext">{renderDate() }</p>
                    </div>
                </label>
            </div>
        );
    }
});

module.exports = connect()(Todo);