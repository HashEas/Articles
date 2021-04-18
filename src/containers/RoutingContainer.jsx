import ArticleListContainer from '../containers/ArticleListContainer';
import MasterContainer from '../components/MasterContainer/MasterContainer';
import ArticleDetailContainer from './ArticleDetailContainer';
import ArticleCreateContainer from './ArticleCreateContainer';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";


function RoutingContainer() {
  return (
    <MasterContainer>
      <MDBContainer>
          <MDBRow className="mb-5">
              <MDBCol md="12" className="mb-r">
              <Switch>
                <Route path="/articles" component={ArticleListContainer} />
                <Route path="/detail" component={ArticleDetailContainer} />
                <Route path="/create" component={ArticleCreateContainer} />
                <Redirect to="/articles" />
              </Switch>
              </MDBCol>
          </MDBRow>
        </MDBContainer>
    </MasterContainer>
  );
}

export default RoutingContainer;
