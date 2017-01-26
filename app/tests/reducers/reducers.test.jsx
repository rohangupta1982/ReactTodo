var expect = require('expect');
var reducers = require('reducers');
var deepfreeze = require('deep-freeze-strict');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should change searchText', () => {
            var action = {
                type: 'CHANGE_SEARCH_TEXT',
                searchText: 'dog'
            };
            
            var response = reducers.searchTextReducer(deepfreeze(''), deepfreeze(action));
            
            expect(response).toEqual(action.searchText);
        });
    });
    
    describe('showCompletedReducer', () => {
        it('should set showCompleted', () => {
            var action = {
                type: 'SHOW_COMPLETED'                
            };
            
            var response = reducers.showCompletedReducer(deepfreeze(false), deepfreeze(action));
            
            expect(response).toEqual(true);
        });
    });
    
    describe('todoReducer', () => {
        it('should add a new todo', () => {
            var action = {
                type: 'ADD_TODO',
                todoText: 'Walk the dog'
            };
            
            var response = reducers.todoReducer(deepfreeze([]), deepfreeze(action));
            
            expect(response.length).toEqual(1);
            expect(response[0].text).toEqual(action.todoText);
        });
        
        it('should set todoComplete on a todo', () => {
            var addTodoAction = {
                type: 'ADD_TODO',
                todoText: 'Walk the dog'
            };
            
            var addTodoResponse = reducers.todoReducer(deepfreeze([]), deepfreeze(addTodoAction));
            
            var todoCompleteAction = {
                type: 'TODO_COMPLETE',
                id: addTodoResponse[0].id
            };
            
            var todoCompleteResponse = reducers.todoReducer(deepfreeze(addTodoResponse), deepfreeze(todoCompleteAction));
            
            expect(todoCompleteResponse.length).toEqual(1);
            expect(todoCompleteResponse[0].id).toEqual(todoCompleteAction.id);
            expect(todoCompleteResponse[0].isComplete).toEqual(!addTodoResponse[0].isComplete);
        });
    });
});