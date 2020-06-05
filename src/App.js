import React from 'react';
import './App.scss';
import GamePage from './pages/GamePage/GamePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './pages/Header/Header';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/game" component={GamePage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
