var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function() {
        var {todoList} = this.props;
        var renderTodoList = function() {
            return todoList.map(function(todo) {
                return (
                    <Todo key={todo.id} {...todo}/>
                );
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