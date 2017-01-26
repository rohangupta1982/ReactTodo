var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

var store = require('configureStore').configure();
var actions = require('actions');

store.subscribe(function() {
    console.log('Current state', store.getState());
});
store.dispatch(actions.addTodoActionGenerator('Walk the dog'));
store.dispatch(actions.searchTextActionGenerator('dog'));
store.dispatch(actions.showCompletedActionGenerator());

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//Load application styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);