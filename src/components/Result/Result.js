import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            newGame: false
        };
    }

    componentDidMount() {
        this.setState({ result: JSON.parse(localStorage.getItem('res')) });
    }

    newGame() {
        localStorage.removeItem('test');
        localStorage.removeItem('res');
        this.setState({ newGame: true });
    }

  render() {
    if(this.state.newGame === true) {
        return ( <Redirect to='/start'/>)
    }
    return (
        <div>
            <p>Last result</p>
            <div>{this.state.result}</div>
            <button onClick={this.newGame.bind(this)}>New game</button>
        </div>
    );
  }
}

export default Result;