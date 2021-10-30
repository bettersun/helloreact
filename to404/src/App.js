import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './home.jsx';
import './App.css';

function App() {

  return (
    <Switch>
      <Route path="/404" exact>
        <div>404</div>
      </Route>
      <Route path="/">
        <Home></Home>
      </Route>
    </Switch>
  );
}

export default App;
