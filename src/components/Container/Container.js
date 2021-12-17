import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import { Authorization, Registration, Start, Game, Result } from '../';

class Container extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/authorization' component={Authorization}/>
          <Route path='/registration' component={Registration}/>
          <Route path='/start' component={Start}/>
          <Route path='/game' component={Game}/>
          <Route path='/result' component={Result}/>
        </Switch>
      </div>
    );
  }
}

export default Container;