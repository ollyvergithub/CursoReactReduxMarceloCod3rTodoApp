import React from 'react';
import Menu from '../template/Menu';
import Routes from '../main/Routes'

const App = ()=> (
    <section id="main" role="main">
        <Menu/>
        <section className="container">
            <Routes/>
        </section>
    </section>
);

export default App;

