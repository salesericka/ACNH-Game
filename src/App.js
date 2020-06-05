import React from 'react';
import './App.scss';
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Link, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route to="/" exact component ={HomePage}/>
          {/* <Route to="/game" component={GamePage}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
