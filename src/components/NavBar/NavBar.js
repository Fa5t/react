import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <ul className="NavList">
                <li>
                    <Link exact to="/authorization">Authorization</Link>
                </li>
                <li>
                    <Link to="/registration">Registration</Link>
                </li>
                <li>
                    <Link to="/start">Start</Link>
                </li>
                <li>
                    <Link to="/game">Game</Link>
                </li>
                <li>
                    <Link to="/result">Result</Link>
                </li>
            </ul>
        );
    }
}

export default NavBar;