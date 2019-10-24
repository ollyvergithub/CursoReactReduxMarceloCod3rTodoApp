import React from 'react';
import Menu from '../template/Menu';
import Routes from '../main/Routes'
import '../template/assets/css/style.css';

const App = ()=> (
    <section id="main" role="main">
        <Menu/>
        <section className="container">
            <Routes/>
        </section>
    </section>
);

export default App;

