import React from 'react';
import './App.scss';
import GamePage from './pages/GamePage/GamePage';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/game" component={GamePage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
