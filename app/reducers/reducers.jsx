var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = function(state = '', action) {
    switch(action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return action.searchText; 
        default:
            return state;
    }
};

export var showCompletedReducer = function(state = false, action) {
    switch(action.type) {
        case 'SHOW_COMPLETED':
            return !state; 
        default:
            return state;
    }
};

export var todoReducer = function(state = [], action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: uuid(),
                    text: action.todoText,
                    isComplete: false,
                    createdOn: moment(),
                    completedOn: undefined
                }
            ];
        case 'TODO_COMPLETE':
            return state.map(function(todo) {
                if(todo.id === action.id) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete,
                        completedOn: !todo.isComplete ? moment() : undefined
                    };
                }
                return todo;
            });
        default:
            return state;
    }
};