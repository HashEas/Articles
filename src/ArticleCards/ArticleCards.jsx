import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBIcon, MDBBtn} from "mdbreact";
const ArticleCards = () => {
  return (
    <MDBContainer>
        <MDBRow className="mb-5"></MDBRow>
        <MDBRow>
            <MDBCol md="6" className="mb-r">
                <MDBCard narrow>
                    <h2 className='h2-responsive mt-5'>Mattonit</h2>
                    <p className='font-weight-bold blue-text'>Photographer | user</p>
                    <MDBCardBody cascade className='text-center' >
                        <MDBCardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam
                            dignissimos neque rem nihil ratione est placeat vel, natus non
                            quos laudantium veritatis sequi.Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                            aliquid ex ea commodi.
                        </MDBCardText>
                        <hr />
                        <button className="btn btn-primary waves-effect waves-light">Button</button>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  );
}

export default ArticleCards;
