import React, { Component } from 'react';
import axios from 'axios';
import "./GamePage.scss";
import Timer from 'react-compound-timer';
import Countdown from 'react-countdown';

const API_URL = 'http://acnhapi.com/v1/villagers/';

class GamePage extends Component {
    state = {
        villager: {},
        villagerNames: [],
        message: ""
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
            this.setState({
                message: `You guessed it right! This is ${name}.`
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
        }
    }

    timeIsOut() {
        this.setState({
            villager: {},
            villagerNames: [],
            message: ""
        })

        this.getVillager();
        this.getOtherVillager();
        this.getOtherVillager();
        this.getOtherVillager();
    }

    render() {
        let shuffledArray = (this.state.villagerNames).sort(() => Math.random() - 0.5);

        return (
            <div className="game">
                <div className="game-card">
                    <div className="game-card__image-wrapper" key={4000}>
                        <Countdown date={Date.now() + 4000} onComplete={() => this.timeIsOut()} autoStart={true} />
                        {/* <Timer
                            initialTime={4000}
                            direction="backward"
                            startImmediately={true}
                            key={4000}
                            checkpoints={[
                                {
                                    time: 0,
                                    callback: () => this.timeIsOut(),
                                },
                            ]}
                        >
                            {() => (
                                <React.Fragment>
                                    <Timer.Seconds /> seconds
                                </React.Fragment>
                            )}
                        </Timer> */}
                        <img src={this.state.villager.image} className="game-card__image">
                        </img>
                        <p>{this.state.message}</p>
                        
                    <div className="game-card__question-wrapper">
                        <img src={this.state.villager.icon} className="game-card__icon"/>
                        <p className='game-card__question'>
                            Who is this villager? 
                        </p>

                    </div>
                    <div className="game-card__answer-wrapper">
                        {this.state.villagerNames.map(name => {
                            return (
                                <>
                                    <p className="game-card__answer game-card__answer-one" onClick={() => this.letsPlay(name)}>
                                        {name}
                                    </p>
                                </>
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