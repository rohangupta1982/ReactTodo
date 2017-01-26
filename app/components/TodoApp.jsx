var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');
var PersistanceAPI = require('PersistanceAPI');

var TodoApp = React.createClass({
    getInitialState: function() {
        return ({
            todoList: PersistanceAPI.getTodoList(),
            todoSearchText: '',
            isShowCompleted: false
        });
    },
    componentDidUpdate: function() {
        PersistanceAPI.setTodoList(this.state.todoList);
    },
    handleAddTodo: function(todoText) {
        this.setState({
            todoList: [
                ...this.state.todoList,
                {
                    id: uuid(),
                    text: todoText,
                    isComplete: false,
                    createdOn: moment(),
                    completedOn: undefined
                }
            ]
        });
    },
    handleTodoSearch: function(todoSearchText, isShowCompleted) {
        this.setState({
            todoSearchText: todoSearchText,
            isShowCompleted: isShowCompleted
        });
    },
    handleStatusChange: function(id) {
        var updatedTodoList = this.state.todoList;

        updatedTodoList.forEach(function(todo) {
            if (id === todo.id) {
                todo.isComplete = !todo.isComplete;
                todo.completedOn = todo.isComplete ? moment() : undefined;
                return;
            }
        });
        this.setState({
            todoList: updatedTodoList
        });
    },
    render: function() {
        var {todoList, todoSearchText, isShowTodosComplete} = this.state;
        var filteredTodoList = PersistanceAPI.getFilteredTodoList(todoList, todoSearchText, isShowTodosComplete);

        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="columns small-4 small-centered">
                        <div className="container">
                            <TodoSearch onTodoSearch={this.handleTodoSearch}/>
                            <TodoList todoList={filteredTodoList} onStatusChange={this.handleStatusChange}/>
                            <TodoAdd onAddTodo={this.handleAddTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;