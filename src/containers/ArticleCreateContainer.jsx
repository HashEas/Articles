import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';


class ArticleCreateContainer extends React.Component{

  state = {
    articleData : {
        "block":[],
        "category":"",
        "content":"",
        "likes":[],
        "owner":"",
        "title":""
    }
  }

  componentDidMount () {
    console.log(this.props); 
    this.setState({
      articleData: {
        owner: this.props.history.location.state.user
      }
    });
  }

  formChangeHandler = (e, objKey) => {
    let updateObj = {
      ...this.state.articleData,
      [objKey]:e.target.value 
    };
    this.setState({
      articleData: updateObj
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.articleData);
    this.props.postArticle(this.state.articleData, () => {
      this.props.history.push("/")
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <form onSubmit={(e) => this.onSubmitHandler(e)}>
              <p className="h5 text-center mb-4">Post a New Article</p>
              <div className="grey-text">
                <MDBInput label="Your Email" 
                          group type="email" 
                          validate error="wrong" success="right" 
                          required
                          disabled
                          onChange={(e) => this.formChangeHandler(e, "owner")} value ={this.state.articleData.owner}/>
                <MDBInput label="Category" 
                          group type="text" 
                          validate error="wrong" success="right"
                          required
                          onChange={(e) => this.formChangeHandler(e, "category")} value={this.state.articleData.category} />
                <MDBInput label="Title" 
                          group type="text" 
                          validate error="wrong" success="right"
                          required
                          onChange={(e) => this.formChangeHandler(e, "title")} value={this.state.articleData.title} />
                <MDBInput type="textarea" rows="4" label="Content"
                          onChange={(e) => this.formChangeHandler(e, "content")} value={this.state.articleData.content} />
              </div>
              <div className="text-center">
                  <button 
                      type="submit"
                      className="btn btn-primary waves-effect waves-light">Create</button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    postArticle: (articleData, callback) => dispatch(actions.postArticle(articleData, callback))
  }
}

export default connect(null, mapDispatchToProps)(ArticleCreateContainer);