import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';
import RoutingContainer from './RoutingContainer';

class AuthContainer extends React.Component{

  state = {
    authenticated : true
  }

  authenticatedContainer = () => {
    return (
      <Switch>
        <Route path="/" component={RoutingContainer} />
        <Redirect to="/" />
      </Switch>
    );
  }

  nonAuthenticatedContainer = () => {
    return (
      <Switch>
          <Route path="/login" component={Login} />
          <Route path="/Registration" component={Registration} />
          <Redirect to="/login" />
      </Switch>
    );
  }
  

  render(){
    return this.state.authenticated ? this.authenticatedContainer() : this.nonAuthenticatedContainer();
  }
}

export default AuthContainer;
