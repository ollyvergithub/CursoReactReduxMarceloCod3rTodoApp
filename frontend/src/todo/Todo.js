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

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : '';
        Axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resposta => this.setState({...this.state, description, list:resposta.data}))
    }

    handleClear(){

        console.log('Entrei');

        this.refresh();
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handelMarkeAsDone(todo){
        Axios.put(`${URL}/${todo._id}`, {...todo, done:true})
            .then(resposta=> this.refresh(this.state.description))

    }

    handleMarkAsPending(todo){
        Axios.put(`${URL}/${todo._id}`, {...todo, done:false})
            .then(resposta=> this.refresh(this.state.description))
    }

    handleRemove(todo){
        Axios.delete(`${URL}/${todo._id}`)
            .then(resposta => this.refresh(this.state.description))
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
                <TodoForm
                    description={this.state.description}
                    handleClear = {this.handleClear.bind(this)}
                    handleSearch = {this.handleSearch.bind(this)}
                    handleAdd={this.handleAdd.bind(this)}
                    handleChange={this.handleChange.bind(this)} />
                <TodoList
                    list={this.state.list}
                    handelMarkeAsDone = {this.handelMarkeAsDone.bind(this)}
                    handleMarkAsPending = {this.handleMarkAsPending.bind(this)}
                    handleRemove = {this.handleRemove.bind(this)}/>
            </div>
        )
    }

}

export default Todo;