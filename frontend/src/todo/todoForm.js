import React from 'react';
import Grid from '../template/Grid';
import Button from '../template/Button';

export default props => (
    <div className="row">

        <Grid cols='12 9 10'>
            <input type="text" className="form-control" id="description" value={props.description} onChange={props.handleChange} placeholder="Adicione tarefas"/>
        </Grid>

        <Grid cols='12 3 2'>
            <Button style='primary' onClick={props.handleAdd} icon="plus"/>
        </Grid>

    </div>

);