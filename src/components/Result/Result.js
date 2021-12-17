import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Result.css';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            newGame: false,
            questions: []
        };
    }

    componentDidMount() {
        this.setState({ result: JSON.parse(localStorage.getItem('res')) });
        this.setState({ questions: JSON.parse(localStorage.getItem('results')) });
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
            <div className='container container-result'>
                <div className='container__block'>
                    <div>Question</div>
                    <div>Answer</div>
                    <div>Correct</div>
                </div>
                {   this.state.questions.map((item) =>
                    <div className='container__block'>
                        <div>{item.question}</div>
                        <div>{item.answer}</div>
                        <div>{item.current_answer}</div>
                    </div>
                    )
                }
            </div>
            <button className='btn-start'onClick={this.newGame.bind(this)}>New game</button>
        </div>
    );
  }
}

export default Result;