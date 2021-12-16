import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class Authorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            auth: false
        };
    }

    changeEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    changePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    async authorization () {
        let response = await fetch('https://internsapi.public.osora.ru/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
              email: this.state.email,
              password: this.state.password,
            })
          });
          if (response.ok) {
          let json = await response.json();
          if (json.status) {
              localStorage.setItem('access_token', JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                access_token: json.data.access_token
              }))
              alert('Успешно авторизованы')
              this.setState({ auth: true });
          } else {
            if(json.errors === "Unauthorized"){
                console.log(json.errors)
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
    if(this.state.auth === true) {
      return ( <Redirect to='/start'/>)
    }
    return (
        <div>
            <div className="container">
              <p className="authorization-title title">Введите данные для входа</p>
              <input type="email" className="authorization-text input-email" placeholder="Email@mail.ru" onChange={this.changeEmail} />
              <input type="password" className="authorization-password input-password" placeholder="Password" onChange={this.changePassword} />
              <input type="button" className="btn authorization-btn input-button" value='submit' onClick={this.authorization.bind(this)}/>
              <p className="authorization-qn">Нету аккаунта?</p>
              <Link to = '/registration'>Регистрация</Link>
            </div>
        </div>
    );
  }
}

export default Authorization;