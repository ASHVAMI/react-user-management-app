import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import UserDetail from './pages/UserDetail';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/users/:id" component={UserDetail} />
  </Switch>
);

export default Routes;
