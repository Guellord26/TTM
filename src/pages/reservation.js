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
  MDBInputSelect,
  MDBDatePickerV5

} from 'mdbreact';
import { MDBDatePicker } from 'mdbreact'
import js_c_ from "../assets/js_c-2.jpg";
import firstClass from "../assets/bus2.png";
import js_c from "../assets/js_c.jpg";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
import { KeyboardDatePicker } from "@material-ui/pickers";
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DatePickers from './datePicker'
import SectionContainer from '../components/sectionContainer';
import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';



class Reservation extends Component {
  // handleChange = date => {
  //   this.setState({
  //     startDate: date
  //   });
  // };
    state = {
        // startDate: new Date(),
        codeVoyage:'',
        codePromo:''
      };
    //============ VALIDATION =============//
  
      submitHandler = event => {
        event.preventDefault();
        event.target.className += 'was-validated';
      };
    
      changeHandler = event => {
        this.setState({ ...this.state, [event.target.name]: event.target.value });
      };
      
    
    render() {
    const { codePromo, codeVoyage} = this.state
    
    return(
      <MDBCol>
        <SectionContainer noBorder header=''>
        <MDBJumbotron className='text-center'>
          <h2 className='h1 display-3'></h2>
          <p className='lead'></p>
          <hr className='my-2' />
            
      <MDBRow>       
      <MDBCol md='7'>        
       <form className=''noValidate >                                     
        <MDBRow>
        <div className='col-md-4 mb-3'>
          <div className='form-group'>
            <select className='was-validated custom-select bMDBRowser-default' required>
              <option value=''>Ville de départ</option>
              <option value='1'>Lubumbashi</option>
              <option value='2'>Likasi</option>
              <option value='3'>Kolwezi</option>
            </select>
            <div className='invalid-feedback'>
              Veillez choisir une ville de depart
            </div>
          
          </div>
          </div>
          <div className='col-md-4 mb-3'>
          <div className='form-group'>
            <select className='was-validated custom-select bMDBRowser-default' required>
              <option value=''>Ville d'arriver</option>
              <option value='1'>Lubumbashi</option>
              <option value='2'>Likasi</option>
              <option value='3'>Kolwezi</option>
            </select>
            <div className='invalid-feedback'>
              Veillez choisir une ville de depart
            </div>
          
          </div>
          </div>
          <div className='col-md-4 mb-3'>
          <div className='form-group'>
            <select className='custom-select bMDBRowser-default' required>
              <option value='3'>Classe économique</option>
              <option value='2'>Classe Affaire</option>
              <option value='1'>Première Classe</option>
            </select>
           
          </div>
          </div>
        </MDBRow>
        <MDBRow>
        
          <div className='col-md-4 mb-3'>             
              <input
                value={codePromo}
                onChange={this.changeHandler}
                type='text'
                id='defaultFormRegisterPasswordEx4'
                className='form-control'
                name='codePromo'
                placeholder='Code Promotion'
                required />
             
          </div>
          <div className='col-md-4 mb-3'>             
              <input
                value={codeVoyage}
                onChange={this.changeHandler}
                type='text'
                id='defaultFormRegisterPasswordEx4'
                className='form-control'
                name='codeVoyage'
                placeholder='Code frequent travel'
              />            
          </div>
        </MDBRow>
        <MDBRow>
        <div className='col-md-4 mb-3'>
          <div className='form-group'>
         <p>Date de départ</p>        
         <DatePickers/>
          </div>
          </div>
        <div className='col-md-4 mb-3'>
          <div className='form-group'>
            <p>Date de retour</p>
          <DatePickers/>         
          </div>
          </div> 
        </MDBRow>
        <MDBRow>
        <div className='col-md-2 mb-3'>
            <p>Adulte</p>
           <MDBInputSelect getValue={this.getValue} min={1} max={15} value={1} className='mb-2' />
        </div>
        <div className='col-md-2 mb-3'>
          <p>Enfant</p>
           <MDBInputSelect getValue={this.getValue} min={0} max={15} value={0} className='mb-2' />
        </div>
        <div className='col-md-2 mb-3'>
           <p>Bébé</p>
           <MDBInputSelect  getValue={this.getValue} min={0} max={15} value={0} className='mb-2' />
        </div>    
        </MDBRow>      
      {/*</MDBCol>*/}
      {/* <Router> */}
        <Link to="/voyageDispo">
          <button className='btn w3-deep-purple' type='submit'>
              <h4>RECHERCHE</h4>
          </button> 
        </Link>
            
        {/* </Router> */}
      </form>
      </MDBCol> 
      <MDBCol md="5">
      {/* <MDBCard> */}
            <MDBCardImage
             src={firstClass}
              alt='Publicité image cap'
              top
              hover
              overlay='white-slight' style={{height:'300px'}}
            />
            {/* <MDBCardBody>
              <MDBCardTitle tag='h5'></MDBCardTitle>
              <MDBCardText>
               
               <h4>Classes Affaire</h4>
              </MDBCardText>
            </MDBCardBody> */}
          {/* </MDBCard> */}
      </MDBCol>
      </MDBRow>
      </MDBJumbotron>
        </SectionContainer>
      </MDBCol>
    );
}

}
export default Reservation;