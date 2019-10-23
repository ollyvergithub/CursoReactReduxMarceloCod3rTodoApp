import React from 'react';

export default props => (
    <header className="mt-3 mb-3 pb-2 border-bottom">
        <h1>{props.titulo} <small>{props.titulo_menor}</small></h1>
    </header>
);