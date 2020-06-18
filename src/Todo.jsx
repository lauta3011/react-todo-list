import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component {
    
    render() { 
        return (  
            <div className="Todo">
                <button onClick={() => this.props.onDeleteTodo(this.props.id)}>x</button>
                <div>
                    <h2>{this.props.name}</h2>
                    <span>{this.props.description}</span>
                </div>
            </div>
        );
    }
}
 
export default Todo;