var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function() {
        return ({
            todoList: []
        });
    },
    handleAddTodo: function(todoText) {
        var todoCount = this.state.todoList.length;
        var todoList = this.state.todoList;
        
        var todo = {
            id: todoCount + 1,
            text: todoText
        };
        
        todoList.push(todo);
        
        this.setState({
            todoList: todoList
        });
    },
    handleTodoSearch: function(todoSearchText,showTodosCompleted) {
        
    },
    render: function() {    
        return(
            <div>
                <div>
                    <div>
                        <div className="row">
                            <div className="columns small-4 small-centered">
                                <TodoSearch onTodoSearch={this.handleTodoSearch}/>
                                <TodoList todoList={this.state.todoList}/>
                                <TodoAdd onAddTodo={this.handleAddTodo}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;