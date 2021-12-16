import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import { Authorization, Registration, Game, Result } from '../';

class Container extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contacts' component={Contacts}/>
          <Route component={NotFound}/> */}
          <Route path='/authorization' component={Authorization}/>
          <Route path='/registration' component={Registration}/>
          <Route path='/game' component={Game}/>
          <Route path='/result' component={Result}/>
        </Switch>
      </div>
    );
  }
}

export default Container;