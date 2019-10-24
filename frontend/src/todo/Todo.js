import React from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from '../todo/todoForm';
import TodoList from '../todo/todoList';

class Todo extends React.Component{
    constructor(props){
        super(props);
    }

    handleAdd(){
        console.log(this);
    }

    render() {
        return(
            <div>
                <PageHeader titulo="Tarefas" titulo_menor="Cadastro"/>
                <TodoForm handleAdd={this.handleAdd.bind(this)}/>
                <TodoList/>
            </div>
        )
    }

}

export default Todo;