import React, { Component } from 'react';
import './InsertTodo.css'

class InsertTodo extends Component {
    state = { 
        name : '',
        description : ''
     }
        
    handleInsertTodo = () => {
        if(this.state.name === '' || this.state.description === '') return;
        this.props.onInsertTodo(this.state.name, this.state.description);
        this.setState({name:''});
        this.setState({description:''})
    }

    render() { 
        return (
            <div className="InsertTodo">
                <input placeholder="Task title" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} /><br/>
                <input placeholder="Task description" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/><br/>
                <button onClick={() => this.handleInsertTodo(this.state.name, this.state.description)} >+</button>
            </div>
          );
    }
}
 
export default InsertTodo;