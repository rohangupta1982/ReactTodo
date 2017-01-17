var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoAdd = require('TodoAdd');

describe('TodoAdd',() => {
    it('should exist', () => {
        expect(TodoAdd).toExist();
    });
    
    it('should call onAddTodo if valid data entered', () => {
        var spy = expect.createSpy();
        var todoAdd = TestUtils.renderIntoDocument(<TodoAdd onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoAdd));
        
        todoAdd.refs.todoText.value = 'Walk the dog';
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toHaveBeenCalledWith('Walk the dog');
    });
    
    it('should not call onAddTodo if invalid data entered', () => {
        var spy = expect.createSpy();
        var todoAdd = TestUtils.renderIntoDocument(<TodoAdd onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoAdd));
        
        todoAdd.refs.todoText.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toNotHaveBeenCalled();
    });
});