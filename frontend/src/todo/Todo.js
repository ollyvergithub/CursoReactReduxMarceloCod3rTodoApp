import React from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from '../todo/todoForm';
import TodoList from '../todo/todoList';

class Todo extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <PageHeader titulo="Tarefas" titulo_menor="Cadastro"/>
                <TodoForm/>
                <TodoList/>
            </div>
        )
    }

}

export default Todo;