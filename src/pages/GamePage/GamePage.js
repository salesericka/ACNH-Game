import React, { Component } from 'react';
import axios from 'axios';

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
            <h1>Heyo!</h1>
        )
    }
}

export default GamePage;