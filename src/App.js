import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Authorization, Container, Registration, NavBar } from './components';
import './App.css';

class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <div className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h2>Welcome to React</h2>
  //       </div>
  //       <p className="App-intro">
  //         <NavBar/>
  //         <Container/>
  //       </p>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        {/* <Authorization/>
        <Container/> */}
        {/* <Switch>
          <Route path='/' exact component={Authorization}/>
          <Route path='/registration' component={Registration}/>
        </Switch> */}
        <NavBar/>
        <Container/>
          {/* <Route path='/Authorization' component={Authorization}>
            <Authorization />
          </Route>
          <Route path='/registration' component={Registration}>
            <Registration />
          </Route> */}
        </p>
    </div>
    );
  }
}

export default App;
