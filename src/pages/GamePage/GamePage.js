import React, { Component } from 'react';
import axios from 'axios';
import "./GamePage.scss";
const API_URL = 'http://acnhapi.com/v1/villagers/';

class GamePage extends Component {
    state = {
        villager: {},
        villagerNames: [],
    }

    getVillager = () => {
        let villagerId = (Math.floor(Math.random() * 391) + 1);

        axios
            .get(API_URL + villagerId)
            .then(result => {
                let villagerName = result.data.name['name-USen'];
                console.log(villagerName);
                let villagerImage = result.data.image_uri;
                let villagerIcon =result.data.icon_uri;
                this.setState({
                    villager: {
                        name: villagerName,
                        image: villagerImage,
                        icon:villagerIcon
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
                let otherVillagerName5 = result.data.name['name-USen'];

                this.setState({
                    villagerNames: [
                        otherVillagerName2, otherVillagerName3, otherVillagerName4,otherVillagerName5
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
                    <div className="game-card__image-wrapper">
                        <img src={this.state.villager.image} className="game-card__image">
                        </img>
                        
                    <div className="game-card__question-wrapper">
                      <img src={this.state.villager.icon} className="game-card__icon"/>
                      <p className='game-card__question'>
                         Who is this villager? 
                      </p>
                      
                    </div>
                    <div className="game-card__answer-wrapper">
                        {this.state.villagerNames.map(name => {
                            return (
                                <p className="game-card__answer game-card__answer-one">
                                    {name}
                                </p>
                            )
                            })}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default GamePage;