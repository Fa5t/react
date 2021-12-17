import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 0,
            question: '',
            time: 0,
            options: [],
            dificulty: 0,
            endtest: false,
            newGame: false
        };
    }

    componentDidMount() {
      this.setState({
        points: JSON.parse(localStorage.getItem('test')).points,
        question: JSON.parse(localStorage.getItem('test')).question,
        time: JSON.parse(localStorage.getItem('test')).time,
        options: JSON.parse(localStorage.getItem('test')).options,
        dificulty: JSON.parse(localStorage.getItem('test')).type_hard
      });
      this.timer();
    }

    timer() {
      this.Timer = setInterval(() => {
        if(this.state.time) {
          this.setState({time: this.state.time - 1})
        } 
      }, 1000);
    }

    async answer (e) {
      let answer = +(e.target.value);
      let response = await fetch('https://internsapi.public.osora.ru/api/game/play', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('access_token')).access_token}`
        },
        body: JSON.stringify({
          answer: answer,
          type_hard: JSON.parse(localStorage.getItem('test')).type_hard,
          type: 2
        })
      });
      if (response.ok) {
        let json = await response.json();
        if(json.status) {  
          this.setState({ 
            points: json.data.points,
            question: json.data.question,
            time: json.data.time,
            options: json.data.options,
          })
        } else {
          localStorage.setItem('res', JSON.stringify(this.state.points));
          this.setState({ endtest: true});
        }
      } else {
        console.log('HTTP error - ' + response.status);
      }

    }

    goBack() {
      localStorage.removeItem('test');
      localStorage.removeItem('res');
      this.setState({ newGame: true });
    }

  render() {
    if(this.state.endtest === true) {
      return ( <Redirect to='/result'/>)
    }
    if(this.state.newGame === true) {
      return ( <Redirect to='/start'/>)
    }
    if(JSON.parse(localStorage.getItem('auth')) === true) {
      return (
        <div>
            <div>
              <div>SCORE {this.state.points}</div>
              <div>TIMER {this.state.time}</div>
              <div>{this.state.question} = ?</div>
            </div>
            <div>
              {this.state.options.map((item, i) => <button value={item} onClick={this.answer.bind(this)}>{item}</button> )}
            </div>
            <div>
              <button className='btn' onClick={this.goBack.bind(this)}>GO BACK</button>
            </div>
        </div>
      );
    } else {
      return ( <Redirect to='/authorization'/>)
    } 
  }
}

export default Game;