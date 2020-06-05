import React from 'react';
import './App.scss';
import GamePage from './pages/GamePage/GamePage';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route to="/" exact component ={HomePage}/>
          <Route to="/game" component={GamePage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
