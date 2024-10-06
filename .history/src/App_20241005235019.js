import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import UserDetail from './pages/UserDetail';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users/:id" component={UserDetail} />
    </Switch>
  </Router>
);

export default App;
