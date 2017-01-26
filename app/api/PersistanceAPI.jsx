var PersistanceAPI = {
    getTodoList: function() {
        var todoListString = localStorage.getItem('todoList');
        var todoList = [];
        
        try{
            todoList = JSON.parse(todoListString);
            
            return Array.isArray(todoList) ? todoList : [];
        } catch(err) {
            return [];
        }
    },
    setTodoList: function(todoList) {
        if(Array.isArray(todoList)) {
            localStorage.setItem('todoList', JSON.stringify(todoList));
            return todoList;
        }
    },
    getFilteredTodoList: function(todoList,todoSearchText,isShowTodosComplete) {
        var filteredTodoList = todoList;
        
        if(!isShowTodosComplete) {
            filteredTodoList = filteredTodoList.filter(function(todo) {
                return !todo.isComplete;
            });
        }
        
        if(todoSearchText.length > 0) {
            filteredTodoList = filteredTodoList.filter(function(todo) {
                return todo.text.toLowerCase().includes(todoSearchText.toLowerCase());
            });
        }
        
        filteredTodoList.sort(function(todoA, todoB) {
            if(todoA.isComplete === false && todoB.isComplete === true) {
                return -1;
            }
            if(todoA.isComplete === true && todoB.isComplete === false) {
                return 1;
            }
            return 0;
        });
        
        return filteredTodoList;
    }
};

module.exports = PersistanceAPI;