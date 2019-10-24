import React from 'react';
import Axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from '../todo/todoForm';
import TodoList from '../todo/todoList';

const URL = 'http://localhost:3003/api/todos';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state= {description: '', list: []};

        this.refresh();
    }

    refresh(){

        Axios.get(`${URL}?sort=-createdAt`)
            .then(resposta => this.setState({...this.state, description: '', list:resposta.data}))
    }

    handleRemove(todo){
        Axios.delete(`${URL}/${todo._id}`)
            .then(resposta => this.refresh())
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(){
        const DESCRIPTION = this.state.description;

        Axios.post(URL, {description: DESCRIPTION})
            .then(resposta => this.refresh())

/*        const requestInfo = {
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
            })*/

    }

    render() {
        return(
            <div>
                <PageHeader titulo="Tarefas" titulo_menor="Cadastro"/>
                <TodoForm description={this.state.description} handleAdd={this.handleAdd.bind(this)} handleChange={this.handleChange.bind(this)} />
                <TodoList list={this.state.list} handleRemove = {this.handleRemove.bind(this)}/>
            </div>
        )
    }

}

export default Todo;