import React, { Component } from 'react';
import { Redirect, Switch, Route, Link } from 'react-router-dom'

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ''
        };
    }

    componentDidMount() {
        this.setState({ result: JSON.parse(localStorage.getItem('res')) });
    }

  render() {
    return (
        <div>
            <p>Last result</p>
            <div>{this.state.result}</div>
        </div>
    );
  }
}

export default Result;