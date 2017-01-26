var redux = require('redux');
var {searchTextReducer,showCompletedReducer,todoReducer} = require('reducers');

export var configure = function() {
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todo: todoReducer
    });

    var store = redux.createStore(reducer, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : function(f) {
            return f;
        }
    ));
    
    return store;
};