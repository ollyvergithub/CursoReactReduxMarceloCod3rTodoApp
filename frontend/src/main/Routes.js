import React from  'react';
import { Route, Switch } from 'react-router-dom'
import Todo from '../todo/Todo';
import About from '../about/About';

export default props => (
    <div id="main">
        <Switch>
            <Route path="/" exact component={Todo} />
            <Route path="/todos" component={Todo} />
            <Route path="/about" component={About}/>
            <Route path="*" component={Todo}/>
        </Switch>
    </div>

);
