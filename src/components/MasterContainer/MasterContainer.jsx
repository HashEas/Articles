import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCol, MDBIcon, MDBRow } from "mdbreact";

const MasterContainer = (props) => {
  return (
    <>
      <MDBRow className="mb-4 bg-primary">
        <MDBCol md="1" className="mb-r mt-2">
            <MDBIcon icon="home" className="white-text"  size="2x"/>
        </MDBCol>
        <MDBCol md="9" className="mb-r mt-1 collapse-shrink" >       
            <h1 className="text-uppercase text-left white-text">Articles</h1>
        </MDBCol>
        <MDBCol md="1" className="mb-r mt-1 collapse-shrink">
            <button className="btn btn-primary waves-effect waves-light">Create</button>
        </MDBCol>
      </MDBRow>
      <MDBRow md="12" className="mb-r" >
        {props.children}
      </MDBRow>
    </>
  );
}

export default MasterContainer;
