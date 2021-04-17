import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';
import RoutingContainer from './RoutingContainer';

function AuthContainer() {
  return (
    <Switch>
        <Route path="/login" component={Login} />
        <Route path="/Registration" component={Registration} />
        <Route path="/home" component={RoutingContainer} />
        <Redirect to="/Registration" />
    </Switch>
  );
}

export default AuthContainer;
