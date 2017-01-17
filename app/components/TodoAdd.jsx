var React = require('react');

var TodoAdd = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;
        
        if(todoText.length > 0) {
            this.props.onAddTodo(todoText);
        }
        
        this.refs.todoText.value = '';
    },
    render: function() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do ?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = TodoAdd;