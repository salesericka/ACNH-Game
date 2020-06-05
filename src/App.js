import React from 'react';
import './App.scss';
import GamePage from './pages/GamePage/GamePage';
import { BrowserRouter, Link, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <GamePage/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
