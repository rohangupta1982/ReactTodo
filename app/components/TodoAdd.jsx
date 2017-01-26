var React = require('react');

var TodoAdd = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;
        
        if(todoText.length > 0) {
            this.props.onAddTodo(todoText);
        }
        
        this.refs.todoText.value = '';
        this.refs.todoText.focus();
    },
    render: function() {
        return(
            <div className="container__footer">
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do ?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = TodoAdd;