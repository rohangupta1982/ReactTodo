var React = require('react');
var TodoList = require('TodoList');

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
    render: function() {    
        return(
            <div>
                <div>
                    <div>
                        <div className="row">
                            <h1>Todo App Controller</h1>
                            <TodoList todoList={this.state.todoList}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;