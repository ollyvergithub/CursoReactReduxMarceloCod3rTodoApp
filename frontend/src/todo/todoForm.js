import React from 'react';

export default props => (
    <div className="row">

            <div className="col-12 col-md-9 col-lg-10">
                <input type="text" className="form-control" id="description" placeholder="Adicione tarefas"/>
            </div>
            <div className="col-12 col-md-3 col-lg-2">
                <button type="submit" className="btn btn-primary"><i className="fa fa-plus"></i></button>
            </div>

    </div>

);