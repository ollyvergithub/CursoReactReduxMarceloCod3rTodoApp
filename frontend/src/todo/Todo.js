import React from 'react';

import PageHeader from '../template/pageHeader';
import TodoForm from '../todo/todoForm';
import TodoList from '../todo/todoList';

const URL = 'http://localhost:3003/api/todos';

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
        const DESCRIPTION = this.state.description;

        const requestInfo = {
            method:'POST',
            body:JSON.stringify({description: DESCRIPTION}),
            headers: new Headers({
                'Content-type':'application/json'
            })
        };

        fetch(URL, requestInfo)
            .then(response=>{
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error("não foi possível inserir na API");
                }
            })
            .then(resposta=>{
                console.log(resposta)
            })

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