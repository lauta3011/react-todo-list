import React, { Component } from 'react';
import './PlaceholderTodo.css';

class PlaceholderTodo extends Component {
    state = {  }
    render() { 
        return (  
            <div className="Placeholder">
                <div>
                    <h2>Placeholder task</h2>
                    <span>This is a description</span>
                </div>
            </div>
        );
    }
}
 
export default PlaceholderTodo;