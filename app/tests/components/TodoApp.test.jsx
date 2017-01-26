var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp',() => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });
    
    it('should add a todo to the todoList state on handleAddTodo', () => {
        var todoText = 'Walk the dog';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        
        todoApp.setState({todoList: []});
        todoApp.handleAddTodo(todoText);
        
        expect(todoApp.state.todoList[0].text).toBe(todoText);
    });
    
    it('should toggle isCompleted value of todoList member object when handleStatusChange called with member object id', () => {
        var todoTest = {
            id: 1,
            text: 'Test Todo',
            isComplete: false
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todoList: [todoTest]})
        
        todoApp.handleStatusChange(1);
        
        expect(todoApp.state.todoList[0].isComplete).toBe(true);
    });
});