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
            <>
                <div>
                    <img src={this.state.villager.image}></img>
                    {this.state.villagerNames.map(name => {
                        return (
                            <p>{name}</p>
                        )
                        })}
                </div>
            </>
        )
    }
}

export default GamePage;