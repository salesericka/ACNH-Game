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
                        image: villagerImage
                    }
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    getOtherVillagers = () => {
        let otherVillagerId = (Math.floor(Math.random() * 391) + 1);

        axios
            .get(API_URL + otherVillagerId)
            .then(result => {
                let otherVillagerName2 = result.data.name['name-USen'];
                let otherVillagerName3 = result.data.name['name-USen'];
                let otherVillagerName4 = result.data.name['name-USen'];

                this.setState({
                    villagerNames: [
                        otherVillagerName2, otherVillagerName3, otherVillagerName4
                    ]
                })
            })
    }

    letsPlay() {

    }

    componentDidMount() {
        this.getVillager();
        this.getOtherVillagers();
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