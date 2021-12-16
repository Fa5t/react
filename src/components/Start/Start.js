import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dificulty: 1,
            startGame: false
        };
    }

    changeSelect = (e) => {
        this.setState({ dificulty: e.target.value });
    }

    async start () {
        if (this.state.dificulty) {
            let response = await fetch('https://internsapi.public.osora.ru/api/game/play', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('access_token')).access_token}`
            },
            body: JSON.stringify({
              type_hard: +(this.state.dificulty),
              type: 1
            })
          });
          if (response.ok) {
            let json = await response.json();
            console.log(json);
            if(json.status) {
                json.data.type_hard = this.state.dificulty;
                localStorage.setItem('test', JSON.stringify(json.data))
                console.log(json.data);
                console.log(localStorage.getItem('test'));
                this.setState({ startGame: true});
            } else {
                console.log(json.error);
            }
          } else {
            console.log('HTTP error - ' + response.status);
          }
        }
    }

  render() {
    if(this.state.startGame === true) {
      return ( <Redirect to='/game'/>)
    }
    return (
        <div>
            <p>Выберите сложности</p>
            <div>
                <select name="dificulty" defaultValue='1' onChange={this.changeSelect}>
                    <option disabled='disabled' value>Выберите сложность</option>
                    <option value='1'>Easy</option>
                    <option value='2'>Hard</option>
                </select>
                <button onClick={this.start.bind(this)}>Start</button>
            </div>
        </div>
    );
  }
}

export default Start;