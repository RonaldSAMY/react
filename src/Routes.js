import React from 'react';

import { Switch,Route } from 'react-router-dom'
import List from './component/List';
import New from './component/New';
import Login from './component/Login';
import Admin from './component/Admin';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/admin" component={Admin}></Route>
            <Route exact path="/all-ideas" component={List}></Route>
            <Route exact path="/new-idea" component={New}></Route>
        </Switch>
    );
}

export default Routes;
