import React, { Component } from 'react';
import axios from 'axios';
import './GamePage.scss';

const API_URL = 'http://acnhapi.com/v1/villagers/'

class GamePage extends Component {

    getVillagers = () => {
        axios
            .get(API_URL)
            .then(result => {
                console.log(result.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentDidMount() {
        this.getVillagers();
    }


    render() {
        return (
            <div className="game">
                <div className="game-card">
                    <div className="game-card__image">
                        "Image"
                    </div>
                    <div className="game-card__question">
                        "Question"
                    </div>
                    <div className="game-card__answer-wrapper">
                        <p className="game-card__answer game-card__answer-one">
                            "Answer"
                        </p>
                        <p className="game-card__answer game-card__answer-two">
                            "Answer"
                        </p>
                        <p className="game-card__answer game-card__answer-three">
                            "Answer"
                        </p>
                        <p className="game-card__answer game-card__answer-four">
                            "Answer"
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default GamePage;