var React = require('react');

var TodoSearch = React.createClass({
    onTodoSearch: function() {
        var todoSearchText = this.refs.todoSearchText.value;
        var showTodosCompleted = this.refs.todosCompleted.checked;
        
        this.props.onTodoSearch(todoSearchText, showTodosCompleted);
    },
    render: function() {
        return(
            <div>
                <div>
                    <input type="text" ref="todoSearchText" placeholder="Search todo" onChange={this.onTodoSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" className="checkbox" ref="showTodosCompleted" onChange={this.onTodoSearch}/>Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;