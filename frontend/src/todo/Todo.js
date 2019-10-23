import React from 'react';
import PageHeader from '../template/pageHeader';

class Todo extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <PageHeader titulo="Tarefas" titulo_menor="Cadastro"/>
            </div>
        )
    }

}

export default Todo;