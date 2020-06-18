import React, { Component } from 'react';
import Header from './Header';
import InsertTodo from './InsertTodo';
import Todo from './Todo';
import PlaceholderTodo from './PlaceholderTodo'
import './App.css'

class App extends Component {
    state = { tasks : [ {name: 'learn react', description: 'Start learning about react and improve my javascript'} ]}

    handleCreateTodo = (name, description) =>{
        this.setState({ tasks: [...this.state.tasks, {name: name, description: description}]})
    }

    handleDeleteTodo = (id) => {
        const tasks = this.state.tasks.filter(t => t.name !== id);
        this.setState({tasks});
        console.log(tasks);
    }

    renderTodos(props) {
        
        if(this.state.tasks.length >= 2) {
            return (
            <div>{this.state.tasks.map(task => (
                <Todo onDeleteTodo={this.handleDeleteTodo} key={task.name} name={task.name} description={task.description} id={task.name}/>
            ))}</div>
        ); }else if(this.state.tasks.length === 1) {
            return (
                <div>
                    <div>{this.state.tasks.map(task => (
                        <Todo onDeleteTodo={this.handleDeleteTodo} key={task.name} name={task.name} description={task.description} id={task.name}/>
                    ))}</div>
                    <PlaceholderTodo key="todo 1"/>
                </div>   
            )
        }else {
            return (
            <div>
                <PlaceholderTodo key="todo 1"/>
                <PlaceholderTodo key="todo 2"/>
            </div>
        )}
    }

    render() { 
        return (
            <div className="App">
                <Header count={this.state.tasks}/>
                <InsertTodo onInsertTodo={this.handleCreateTodo} />
                <div>{this.renderTodos()}</div>
            </div>
        );   
    }
}
 
export default App;