var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });
    
    it('should call onStatusChange with id when checkbox is toggled', () => {
        var spy = expect.createSpy();        
        var todoTest = {
            id: 1,
            text: 'Todo Test',
            isComplete: false
        };        
        var todo = TestUtils.renderIntoDocument(<Todo key={todoTest.id} {...todoTest} onStatusChange={spy}/>)
        
        todo.refs.isComplete.checked = true;
        TestUtils.Simulate.change(todo.refs.isComplete.checked);
        
        expect(spy).toHaveBeenCalledWith(1);
        
    });
});