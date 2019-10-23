import React from 'react';
import Todo from '../todo/Todo'
import About from '../about/About'
import Menu from '../template/Menu';

const App = ()=> (
    <section id="main" role="main">
        <Menu/>
        <section className="container">
            <Todo/>
            <About/>
        </section>
    </section>
);

export default App;

