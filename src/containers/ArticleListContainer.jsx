import React from 'react';
import ArticleCards from '../components/ArticleCards/ArticleCards';
import { connect } from 'react-redux';
import * as actions from '../store/actions/';
import { MDBRow, MDBCol, MDBNavbarBrand, MDBNavbar} from "mdbreact";
import {Link} from 'react-router-dom';

class ArticleListContainer extends React.Component{

  state = {
    user : "hari@hari.com"
  }

  componentDidMount () {
      console.log(this.props); 
      this.props.fetchArticles();
  }

  filterArticlesWithPreference = () => {
    
  }

  render() {
    return (
      <>
        <MDBRow className="mb-5 indigo">
            <MDBCol md="9" className="mb-r">
              <MDBNavbar color="indigo" dark expand="md">
                <MDBNavbarBrand>Your Feeds here....</MDBNavbarBrand>
              </MDBNavbar>
            </MDBCol>
            <MDBCol md="3" className="mb-r">
            <Link to={{
                    pathname: "/create",
                    state: {
                      user: this.state.user
                    }
                }}>
                <button className="btn btn-primary waves-effect waves-light">New Feed</button>
            </Link>
            </MDBCol>
        </MDBRow>
        <ArticleCards articles={this.props.articles}/>
      </>
    );
  }  
} 

const mapStateToProps = state => {
  return {
      articles: state.articleState.articles
  };
}

const mapDispatchToProps = dispatch => {
  return {
      fetchArticles: (user) => dispatch(actions.fetchArticles(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer);