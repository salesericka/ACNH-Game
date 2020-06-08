import React from 'react';
import './HomePage.scss';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';

function HomePage() {
  return (
   <>
      <Header/>
      <main className="homepage">
         <Link to="/game">
            <button className="homepage__button-game">
               Start Game
            </button>
         </Link>
      </main>
   </>
  )
}

export default HomePage;
