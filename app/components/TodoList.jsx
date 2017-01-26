var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function() {
        var {todoList} = this.props;
        
        var renderTodoList = () => {
            if(todoList.length === 0) {
                return(
                    <p className="container__message">Nothing To Do</p>
                );
            }            
            return todoList.map((todo) => {
                return <Todo key={todo.id} {...todo} onStatusChange={this.props.onStatusChange}/>
            });
        };
        
        return(
            <div>
                {renderTodoList()}
            </div>
        );
    }
});

module.exports = TodoList;