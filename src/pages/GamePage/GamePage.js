import React, { Component } from 'react';
import axios from 'axios';
import "./GamePage.scss";
const API_URL = 'http://acnhapi.com/v1/villagers/';

class GamePage extends Component {
    state = {
        villager: {},
        villagerNames: [],
        userLife:5,
        userPoint:0,
        lifeLabel:"game-card__life"
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
            alert("You guessed it right!");
            this.setState(prevState=>{
                return{
                    villager: {},
                    villagerNames: [],
                    userPoint: prevState.userPoint + 1
                }
            })
            this.getVillager();
            this.getOtherVillager();
            this.getOtherVillager();
            this.getOtherVillager();
        } else {
            this.setState(prevState=>{
                return{
                villager: {},
                villagerNames: [],
                userLife: prevState.userLife - 1
                }
            })

        }
    }

    nextVillager=(e)=>{
        this.setState({
            villager: {},
            villagerNames: [],
        })
       e.preventDefault();
       this.getVillager();
        this.getOtherVillager();
        this.getOtherVillager();
        this.getOtherVillager();
    }

    lifeCounter =()=>{
        if(this.state.userLife === 0) {
            this.setState({
                lifeLabel:"hide__no-life",
                userLife:"Over!"
            })
        }else{

        }
    }

    render() {

        let shuffledArray = (this.state.villagerNames).sort(() => Math.random() - 0.5);

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
                                <p className="game-card__answer game-card__answer-one" >
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
                <div className="game-card__point">
                    Points
                    <br/>
                    {this.state.userPoint}
                </div>
                <div className={this.state.lifeLabel} onCLick={this.lifeCounter}>
                    Life
                    <br/>
                    {this.state.userLife}
                </div>
            </div>
        )
    }
}

export default GamePage;