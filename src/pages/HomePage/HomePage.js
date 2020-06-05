import React from 'react';
import './HomePage.scss';
import { BrowserRouter, Link, Switch } from 'react-router-dom';


function HomePage() {
  return (
   <>
      <div className="title">
         HELLO
      </div>
      <Link to="/game">
         <button className="button__game">
            Start Game
         </button>
      </Link>
    </>
  )
}

export default HomePage;
