var React = require('react');

var TodoSearch = React.createClass({
    onTodoSearch: function() {
        var todoSearchText = this.refs.todoSearchText.value;
        var isShowCompleted = this.refs.isShowCompleted.checked;
        
        if(todoSearchText.length >= 0 || isShowCompleted) {
            this.props.onTodoSearch(todoSearchText, isShowCompleted);
        }
    },
    render: function() {
        return(
            <div className="container__header">
                <div>
                    <input type="text" ref="todoSearchText" placeholder="Search todo" onChange={this.onTodoSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="isShowCompleted" onChange={this.onTodoSearch}/>Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;