import React from 'react';
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";
const Login = () => {
  return (
    <MDBContainer>
      <MDBRow>
      <MDBCol md="3" className="mb-r">
          <MDBRow className="mb-4">
            <MDBCol xl="3" md="6" className="mx-auto text-center">
                Login Page
            </MDBCol>
          </MDBRow>
      </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
