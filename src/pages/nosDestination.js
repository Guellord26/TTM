import React, { Component, useState } from 'react';
import Kolwezi from "../assets/imageKol.png";
import likasi from "../assets/ImagelIkasi.png";
import lushi from "../assets/Imagelshi.png";
import {
 
  MDBIcon,
  MDBButtonLink,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardGroup,
 

} from 'mdbreact';
import SectionContainer from '../components/sectionContainer';

import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';
// import { ReactComponent as Logo } from './assets/logo.svg';

const NosDestination = () =>{
    return(
        <div className="w3-container">
            <h2 className="w3-center">DESTINATION</h2>
        <SectionContainer header=''>       
        <MDBCardGroup deck className='mt-3'>
          <MDBCard>
            <MDBCardImage
              src={lushi}
              alt='MDBCard image cap'
              top
              hover
              overlay='white-slight'
            />
            <MDBCardBody>
              
              <MDBCardText>
               <p>Hypnose</p>
               <h4>Ville de lubumbashi</h4>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src={Kolwezi}
              alt='MDBCard image cap'
              top
              hover
              overlay='white-slight'
            />
            <MDBCardBody>
              
              <MDBCardText>
              <p>Ronpoint Mandela</p>
               <h4>Ville de Kolwezi</h4>
              </MDBCardText>
              
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src={likasi}
              alt='MDBCard image cap'
              top
              hover
              overlay='white-slight'
            />
            <MDBCardBody>
             
              <MDBCardText>
               <p>Ronpoint Mandela</p>
               <h4>Ville de Likasi</h4>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </SectionContainer>
        </div>
    );
}
export default NosDestination;