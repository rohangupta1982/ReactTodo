var expect = require('expect');
var actions = require('actions');

describe('Actions',() => {
    it('should generate search text action', () => {
        var action = {
            type: 'CHANGE_SEARCH_TEXT',
            searchText: 'Some search text'
        };
        var response = actions.searchTextActionGenerator(action.searchText);
        
        expect(response).toEqual(action);
    });
    
    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            todoText: 'Walk the dog'
        };
        var response = actions.addTodoActionGenerator(action.todoText);
        
        expect(response).toEqual(action);
    });
    
    it('should generate show completed action', () => {
        var action = {
            type: 'SHOW_COMPLETED'
        };
        var response = actions.showCompletedActionGenerator();
        
        expect(response).toEqual(action);
    });
    
    it('should generate todo complete action', () => {
        var action = {
            type: 'TODO_COMPLETE',
            id: '1'
        };
        var response = actions.todoCompleteActionGenerator(action.id);
        
        expect(response).toEqual(action);
    });
});