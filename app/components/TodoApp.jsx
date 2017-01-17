var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

var TodoApp = React.createClass({
    getInitialState: function() {
        return ({
            todoList: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Mow the lawn'
                },
                {
                    id: 3,
                    text: 'Wash the car'
                },
                {
                    id: 4,
                    text: 'Fill gas in the car'
                }
            ]
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
    render: function() {    
        return(
            <div>
                <div>
                    <div>
                        <div className="row">
                            <div className="columns small-4 small-centered">
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