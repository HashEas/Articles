import React from 'react';
import { MDBRow, MDBCol} from "mdbreact";
import ArticleCard from './ArticleCard/ArticleCard';
const ArticleCards = (props) => {
  return (
    Object.keys(props.articles).map((articleKey) => {
        return (
            <MDBRow key={articleKey} className="mb-5">
                <MDBCol md="12" className="mb-r">
                    <ArticleCard article={props.articles[articleKey]} />
                </MDBCol>
            </MDBRow>
        );
    })
  );
}

export default ArticleCards;
