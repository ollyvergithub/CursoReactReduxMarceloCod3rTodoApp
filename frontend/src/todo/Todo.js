import React from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from '../todo/todoForm';
import TodoList from '../todo/todoList';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state= {description: '', list: []}
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
        console.log(this.state.description)
    }

    handleAdd(){
        console.log(this);
        console.log(this.state.description);
    }

    render() {
        return(
            <div>
                <PageHeader titulo="Tarefas" titulo_menor="Cadastro"/>
                <TodoForm handleAdd={this.handleAdd.bind(this)} handleChange={this.handleChange.bind(this)} />
                <TodoList/>
            </div>
        )
    }

}

export default Todo;