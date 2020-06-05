import React, { Component } from 'react';
import axios from 'axios';
import "./GamePage.scss";
const API_URL = 'http://acnhapi.com/v1/villagers/';

class GamePage extends Component {
    state = {
        villager: {},
        villagerNames: []
    }

    getVillager = () => {
        let villagerId = (Math.floor(Math.random() * 391) + 1);

        axios
            .get(API_URL + villagerId)
            .then(result => {
                let villagerName = result.data.name['name-USen'];
                console.log(villagerName);
                let villagerImage = result.data.image_uri;
                this.setState({
                    villager: {
                        name: villagerName,
                        image: villagerImage,
                    },
                    villagerNames: [...this.state.villagerNames, villagerName]
                })
                console.log(this.state);
            })
            .catch(err => {
                console.log(err);
            })
    }

    getOtherVillager = () => {
        let otherVillagerId = (Math.floor(Math.random() * 391) + 1);

        axios
            .get(API_URL + otherVillagerId)
            .then(result => {
                let otherVillagerName = result.data.name['name-USen'];

                this.setState({
                    villagerNames: [...this.state.villagerNames, otherVillagerName]
                })
            })
    }

    componentDidMount() {
        this.getVillager();
        this.getOtherVillager();
        this.getOtherVillager();
        this.getOtherVillager();
    }

    letsPlay(name) {
        console.log(name);
        if (name === this.state.villager.name) {
            alert("You guessed it right!");
            this.setState({
                villager: {},
                villagerNames: []
            })
            this.getVillager();
            this.getOtherVillager();
            this.getOtherVillager();
            this.getOtherVillager();
        } else {

        }
    }

    render() {
        let shuffledArray = (this.state.villagerNames).sort(() => Math.random() - 0.5);

        return (
            <>
                <div>
                    <img src={this.state.villager.image}></img>
                    {shuffledArray.map(name => {
                        return (
                            <p onClick={() => this.letsPlay(name)}>{name}</p>
                        )
                        })}
                </div>

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
            </>
        )
    }
}

export default GamePage;