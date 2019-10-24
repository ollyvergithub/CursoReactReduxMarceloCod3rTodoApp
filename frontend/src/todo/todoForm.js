import React from 'react';
import Grid from '../template/Grid';
import Button from '../template/Button';

export default props => {

    const keyHandler = (e) =>{
        if (e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        }else if (e.key === 'Escape'){
            props.handleClear();
        }
    }

    return(
        <div className="row">

            <Grid cols='12 9 10'>
                <h6 className='mt-2 mb-4'>Adicione tarefas com a tecla <code>Enter </code>, pesquise com <code>Shif+Enter</code> e limpe a pesquisa com <code>Esc</code></h6>
            </Grid>

            <Grid cols='12 9 10'>
                <input type="text"
                       className="form-control"
                       id="description"
                       onKeyUp={keyHandler}
                       value={props.description}
                       onChange={props.handleChange}
                       placeholder="Adicione tarefas"/>
            </Grid>

            <Grid cols='12 3 2'>
                <Button style='primary' onClick={props.handleAdd} icon="plus"/>
                <Button style='info' onClick={props.handleSearch} icon="search"/>
                <Button style='outline-dark' onClick={props.handleClear} icon="close"/>
            </Grid>

        </div>
    )

};