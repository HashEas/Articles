import React from 'react';
import {Link} from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardText} from "mdbreact";
const ArticleCard = (props) => {
  const article = props.article;
  return (
    <MDBCard narrow>
        <h2 className='h2-responsive mt-5'>{article.title}</h2>
        <p className='font-weight-bold blue-text'> {article.owner} | {article.category} </p>
        <MDBCardBody cascade className='text-center' >
            <MDBCardText>
                {(article.content).substr(0,50) + "..."}
            </MDBCardText>
            <hr />
            <Link to={{
                      pathname: "/detail",
                      state: {article}
                  }}>
                <button className="btn btn-primary waves-effect waves-light">Read More...</button>
            </Link>                        
        </MDBCardBody>
    </MDBCard>
  );
}

export default ArticleCard;
