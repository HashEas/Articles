import React from 'react';
import {Link} from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBIcon, MDBRow} from "mdbreact";
const ArticleCardDetail = (props) => {
  const article = props.article;
  return (
    <MDBCard narrow>
        <h2 className='h2-responsive mt-5'>{article.title}</h2>
        <p className='font-weight-bold blue-text'> {article.owner} | {article.category} </p>
        <MDBCardBody cascade className='text-center' >
            <MDBCardText>
                {article.content}
            </MDBCardText>
            <hr />
            <MDBRow>
              <MDBCol md='6' className='d-flex justify-content-center'>
                <a href='!#' className='px-2 fa-lg li-ic'>
                  <MDBIcon icon="thumbs-up" size="2x" className="cyan-text" />
                </a>

                <a href='!#' className='px-2 fa-lg tw-ic'>
                  <MDBIcon icon="thumbs-down" size="2x" className="cyan-text"/>
                </a>

                <a href='!#' className='px-2 fa-lg fb-ic'>
                  <MDBIcon icon="ban" size="2x" className="cyan-text" />
                </a>
              </MDBCol>
              <MDBCol md='6' className='d-flex justify-content-center'>
                <Link to={{
                            pathname: "/articles",
                            state: {article}
                        }}
                        >
                      <button className="btn btn-primary waves-effect waves-light">Back</button>
                </Link>
              </MDBCol>                        
            </MDBRow>
        </MDBCardBody>
    </MDBCard>
  );
}

export default ArticleCardDetail;
