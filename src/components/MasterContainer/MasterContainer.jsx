import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCol, MDBRow } from "mdbreact";

const MasterContainer = (props) => {
  return (
    <>
      <MDBRow className="mb-4 bg-primary">
        <MDBCol md="9" className="mb-r" >
              <h1 className="text-uppercase">Articles</h1>
        </MDBCol>
        <MDBCol md="3" className="mb-r" >
              <h2 className="text-uppercase">Profile</h2>
        </MDBCol>
      </MDBRow>
      <MDBRow md="12" className="mb-r" >
        {props.children}
      </MDBRow>
    </>
  );
}

export default MasterContainer;
