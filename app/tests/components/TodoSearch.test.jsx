var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch',() => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });
    
    it('should call onTodoSearch if search text entered', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onTodoSearch={spy}/>);
        
        todoSearch.refs.todoSearchText.value = 'Walk the dog';
        TestUtils.Simulate.change(todoSearch.refs.todoSearchText);
        
        expect(spy).toHaveBeenCalledWith('Walk the dog', false);
    });
    
    it('should call onTodoSearch if checkbox selected', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onTodoSearch={spy}/>);
        
        todoSearch.refs.showTodosCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showTodosCompleted);
        
        expect(spy).toHaveBeenCalledWith('',true);
    });
});