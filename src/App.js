import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserDetail from './pages/UserDetail';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/users/:id" element={<UserDetail />} />
    </Routes>
  </Router>
);

export default App;
