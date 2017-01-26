export var searchTextActionGenerator = function(searchText) {
    return {
        type: 'CHANGE_SEARCH_TEXT',
        searchText
    };
};

export var addTodoActionGenerator = function(todoText) {
    return {
        type: 'ADD_TODO',
        todoText
    };
};

export var showCompletedActionGenerator = function() {
    return {
        type: 'SHOW_COMPLETED'
    };
};

export var todoCompleteActionGenerator = function(id) {
    return {
        type: 'TODO_COMPLETE',
        id
    };
};