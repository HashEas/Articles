import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/';
import ArticleCardDetail from '../components/ArticleCards/ArticleCard/ArticleCardDetail';

class ArticleDetailContainer extends React.Component{

  state = {
    articleData : {}
  }

  componentDidMount () {
    console.log(this.props); 
    this.setState({
      articleData: this.props.history.location.state.article
    });
  }

  render() {
    return (
      <ArticleCardDetail article={this.state.articleData}/>
    );
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    postArticle: (articleData) => dispatch(actions.postArticle(articleData))
  }
}

export default connect(null, mapDispatchToProps)(ArticleDetailContainer);
