import React, { Component } from 'react';
import axios from 'axios';
import "./GamePage.scss";
import Countdown from 'react-countdown';

const API_URL = 'http://acnhapi.com/v1/villagers/';

class GamePage extends Component {
    state = {
        villager: {},
        villagerNames: [],
        userLife: 5,
        userPoint: 0,
        lifeLabel:"game-card__life",
        message: "",
        round: 0
    }

    getVillager = () => {
        let villagerId = (Math.floor(Math.random() * 391) + 1);

        axios
            .get(API_URL + villagerId)
            .then(result => {
                let villagerName = result.data.name['name-USen'];
                let villagerImage = result.data.image_uri;
                let villagerIcon =result.data.icon_uri;
                this.setState({
                    villager: {
                        name: villagerName,
                        image: villagerImage,
                        icon:villagerIcon
                    },
                    villagerNames: [...this.state.villagerNames, villagerName],
                    round: this.state.round+1
                })
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
        if (name === this.state.villager.name) {
            this.setState(prevState => {
                return {
                    userPoint: prevState.userPoint + 1,
                    message:`You guessed it right! This is ${name}.`
                }
            })
            setTimeout(() => {
                this.setState({
                    villager: {},
                    villagerNames: [],
                    message: ""
                })
                this.getVillager();
                this.getOtherVillager();
                this.getOtherVillager();
                this.getOtherVillager();
            }, 3000);

        } else if (this.state.userLife === 1) {
            this.setState({
                lifeLabel:"hide__no-life",
                userLife: 0,
                message: "Game Over!"
            }) 
        
        } else {
            this.setState(prevState => {
                return {                    
                villager: {},
                villagerNames: [],
                userLife: prevState.userLife - 1,
                message: ""
                }
            })
            this.getVillager();
            this.getOtherVillager();
            this.getOtherVillager();
            this.getOtherVillager();
        }
    }

    nextVillager = (e) => {
        this.setState({
            villager: {},
            villagerNames: [],
            message: ""
        })

        e.preventDefault();
        this.getVillager();
        this.getOtherVillager();
        this.getOtherVillager();
        this.getOtherVillager();
    }

    timeIsOut() {
        if (this.state.userLife === 1) {
            this.setState({
                lifeLabel:"hide__no-life",
                userLife: 0,
                message: "Game Over!"
            }) 
        } else if (this.state.userLife > 1) {
            this.setState({
                villager: {},
                villagerNames: [],
                message: "",
                userLife: this.state.userLife-1
            })
    
            this.getVillager();
            this.getOtherVillager();
            this.getOtherVillager();
            this.getOtherVillager();
        }
    }

    render() {

        let shuffledArray = (this.state.villagerNames).sort(() => Math.random() - 0.5);
        
        let notPlayingClass = "";
        let gameOverClass = "gameOver";
        if (this.state.userLife === 0) {
            notPlayingClass = "notPlaying";
            gameOverClass = "";
        }

        return (
            <div className="game">
                <div className={"game-card " + notPlayingClass}>
                    <div className="game-card__image-wrapper timer">
                        <h2><Countdown date={Date.now() + 15000} onComplete={() => this.timeIsOut()} autoStart={true} key={this.state.round} renderer={({ hours, minutes, seconds, completed }) => <span>{seconds} seconds left</span>} /></h2>

                        <img src={this.state.villager.image} className="game-card__image">
                        </img>
                        <p className="game-card__correctAnswer">{this.state.message}</p>
                    <div className="game-card__question-wrapper">
                        <img src={this.state.villager.icon} className="game-card__icon"/>
                        <p className='game-card__question'>
                            Who is this villager? 
                        </p>

                    </div>
                    <div className="game-card__answer-wrapper">
                        {shuffledArray.map(name => {
                            return (

                                <p className="game-card__answer game-card__answer-one" onClick={() => this.letsPlay(name)}>
                                    {name}
                                </p>
                            )
                            })}
                    </div>
                    <button className="game-card__next" onClick={this.nextVillager}>
                        Next Villager
                    </button>
                </div>
                </div>
                <div className={"game-card " + gameOverClass}>
                    <h3>Game Over</h3>
                </div>
                <div className="game-card__point">
                    Points
                    <br/>
                    {this.state.userPoint}
                </div>
                <div className={this.state.lifeLabel}>
                    Life
                    <br/>
                    {this.state.userLife}
                </div>
            </div>
        )
    }
}

export default GamePage;