import React, { Component } from 'react';
import axios from 'axios';
import "./GamePage.scss";

const API_URL = 'http://acnhapi.com/v1/villagers/';

class GamePage extends Component {
    state = {
        villager: {}
    }

    getVillagers = () => {
        let villagerId = (Math.floor(Math.random() * 391) + 1)

        axios
            .get(API_URL + villagerId)
            .then(result => {
                let villagerName = result.data.name['name-USen'];
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

    componentDidMount() {
        this.getVillagers();
    }


    render() {
        return (
            <>
                <div>
                    <img src={this.state.villager.image}></img>
                </div>
            </>
        )
    }
}

export default GamePage;