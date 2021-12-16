import React, { Component } from 'react';
import { Redirect, Switch, Route, Link } from 'react-router-dom'


class Registration extends Component {
    constructor(props) {
      super(props);
      this.state = {
        login: '',
        email: '',
        password: '',
        passwordConfirm: '',
        registered: false
      };
    }

    changeLogin = (e) => {
      this.setState({ login: e.target.value });
    }

    changeEmail = (e) => {
      this.setState({ email: e.target.value });
    }

    changePassword = (e) => {
      this.setState({ password: e.target.value });
    }

    confirmPassword = (e) => {
      this.setState({ passwordConfirm: e.target.value });
    }

    async registration () {
      console.log(this.state.password +' ' + this.state.passwordConfirm);
        let response = await fetch('https://internsapi.public.osora.ru/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
              name: this.state.login,
              email: this.state.email,
              password: this.state.password,
              password_confirmations: this.state.passwordConfirm
            })
          });
          if (response.ok) {
          let json = await response.json();
          console.log(json);
          if (json.status) {
              this.setState({registered: true})
              alert('Registration successful')
          } else {

            if(json.errors.name !== undefined){
              alert(json.errors.name)
            }
            if(json.errors.email !== undefined){
              alert(json.errors.email)
          }
            if(json.errors.password !== undefined){
              alert(json.errors.password)
            }
            }
        } else {
          console.log('HTTP error - ' + response.status);
        }
    }
 
    render() {
      return (
          <div>
              <div className="container">
                <p className="registration-title title">Введите данные для регистрации</p>
                <input type="text" className="registration-text input-login" placeholder="login" onChange={this.changeLogin} />
                <input type="email" className="registration-text input-email" placeholder="Email@mail.ru" onChange={this.changeEmail} />
                <input type="password" className="registration-text input-password" placeholder="Password" onChange={this.changePassword} />
                <input type="password" className="registration-text input-password" placeholder="Confirm password" onChange={this.confirmPassword} />
                <input type="button" className="btn registration-btn input-button" value='submit' onClick={this.registration.bind(this)}/>
                <p className="registration-qn qn">Есть аккаунт?</p>
                <Link to = '/'>Авторизация</Link>
              </div>
          </div>
      );
    }
}

export default Registration;