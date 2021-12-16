import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

  render() {
    return (
        <div>
            <p>Game</p>
        </div>
    );
  }
}

export default Game;