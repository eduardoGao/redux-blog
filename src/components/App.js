import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Users from './Users'
import Menu from './Menu'

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path='/' component={Users} />
        <Route exact path='/tareas'><h1>Tareas</h1></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
