import React from 'react';
import Button from '../template/Button';

export default props => {

    const renderRows = () =>{

        const list = props.list || [];

        return list.map(todo => (
            <tr key={todo._id}>
                <td>
                    {todo.description}
                </td>
                <td>
                    <Button style="danger" icon="trash-o" onClick={() => props.handleRemove(todo)}/>
                </td>
            </tr>
        ));

    }

    return(

        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
            {renderRows()}
            </tbody>
        </table>

    );

};