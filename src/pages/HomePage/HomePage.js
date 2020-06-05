import React from 'react';
import './HomePage.scss';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import logo from '../../assets/NewHorizons.png';

function HomePage() {
  return (
   <main className="homepage">
      <Link to="/game">
         <button className="homepage__button-game">
            Start Game
         </button>
      </Link>
    </main>
  )
}

export default HomePage;
