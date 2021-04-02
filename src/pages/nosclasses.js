import React, { Component, useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon,
  MDBButtonLink,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardGroup,
  MDBJumbotron,
  MDBContainer, MDBRating,
  MDBRow,
  MDBCol,
  MDBInputSelect 

} from 'mdbreact';
import js_c1 from "../assets/bus1.png";
import js_c4 from "../assets/bus2.png";
import js_c from "../assets/bus3.png";
import SectionContainer from '../components/sectionContainer';

import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';

 const NosClasses = () => {

   // ::::: Etoile :::::: //
   const [basic] = useState([
    {
      tooltip: 'Very Bad'
    },
    {
      tooltip: 'Poor'
    },
    {
      tooltip: 'Ok',
      choosed: true
    },
    {
      tooltip: 'Good'
    },
    {
      tooltip: 'Excellent'
    }
  ]);
  const [moyen] = useState([
    {
      tooltip: 'Very Bad'
    },
    {
      tooltip: 'Poor'
    },
    {
      tooltip: 'Ok'
      
    },
    {
      tooltip: 'Good',
      choosed: true
    },
    {
      tooltip: 'Excellent'
    }
  ]);
  const [excelent] = useState([
    {
      tooltip: 'Very Bad'
    },
    {
      tooltip: 'Poor'
    },
    {
      tooltip: 'Ok'
      
    },
    {
      tooltip: 'Good'
      
    },
    {
      tooltip: 'Excellent',
      choosed: true
    }
  ]);
  //:::::::::::::::::::::://
    
        return(
            <div className="w3-container">
                 {/* ======================= CLASSES ====================== */} 
        <h2 className="w3-center">CLASSES</h2> 
        <SectionContainer header=''>
         
        <MDBCardGroup deck className='mt-3'>
          <MDBCard>
            <MDBCardImage
              src={js_c}
              alt='MDBCard image cap'
              top
              hover
              overlay='white-slight'
            />
            <MDBCardBody>
              <MDBCardTitle tag='h5'></MDBCardTitle>
              <MDBCardText>
               Classe Affaires
              </MDBCardText>
              <MDBRating data={moyen} iconRegular />
              {/* <MDBRating iconSize='1x' iconRegular /> */}
             
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src={js_c4}
              alt='MDBCard image cap'
              top
              hover
              overlay='white-slight'
            />
            <MDBCardBody>
              <MDBCardTitle tag='h5'></MDBCardTitle>
              <MDBCardText>
              Première Classe
              </MDBCardText>
              <MDBRating data={excelent} iconSize='1.5x' iconRegular />
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src={js_c1}
              alt='MDBCard image cap'
              top
              hover
              overlay='white-slight'
            />
            <MDBCardBody>
              <MDBCardTitle tag='h5'></MDBCardTitle>
              <MDBCardText>
                Classes Economique
              </MDBCardText>
              <MDBRating data={basic} iconRegular />
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </SectionContainer>
       {/* ============================================================= */}

         </div>
        );
    

}
export default NosClasses;