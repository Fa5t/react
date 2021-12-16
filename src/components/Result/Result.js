import React, { Component } from 'react';
import { Redirect, Switch, Route, Link } from 'react-router-dom'

class Result extends Component {
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
            <p>Result</p>
        </div>
    );
  }
}

export default Result;