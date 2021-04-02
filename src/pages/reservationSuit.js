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
import js_c_ from "../assets/js_c-2.jpg";
import js_C4 from "../assets/js_c4.jpg";
import js_c from "../assets/js_c.jpg";
import SectionContainer from '../components/sectionContainer';
import { ReactComponent as Photo } from '../assets/js_c.jpg';
import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';

class ReservationSuit extends Component {
    state = {
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
      render(){
        const { codePromo, codeVoyage} = this.state
          return(
            <MDBCol>
            <SectionContainer noBorder header=''>
              <MDBJumbotron className='text-center'>
              <div class="w3-btn-group">
              <NavLink to="/voyageDispo"><button className="w3-btn w3-deep-purple w3-xlarge" style={{width:'33.3%'}}>
                  <h5>DISPONIBILITE DES VOYAGES</h5>
                  </button>
              </NavLink>    
              <NavLink to="/reserveSuit"><button className="w3-btn w3-deep-purple w3-xlarge" style={{width:'33.3%'}}>
                  <h5>INFORMATION SUR LE PASSAGERS</h5>
                  </button>
              </NavLink>   
              <NavLink to="/reserveFin"><button className="w3-btn w3-white w3-xlarge" style={{width:'33.3%'}}>
                  <h5>PAYEMENT</h5>
                  </button>
              </NavLink>    
              </div>             
                <h2 className='h1 display-3'></h2>               
                <hr className='my-2' />
               
         <MDBRow>       
         <MDBCol md='12'>        
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
              <div className='form-group'>
                <select className='custom-select bMDBRowser-default' required>
                <option value=''>Date de départ</option>
                  <option value='1'>23</option>
                  <option value='2'>03</option>
                  <option value='3'>09</option>
                </select>          
              </div>
              </div>
              <div className='col-md-4 mb-3'>             
                  <input
                    value={codePromo}
                    onChange={this.changeHandler}
                    type='text'
                    id='defaultFormRegisterPasswordEx4'
                    className='form-control'
                    name='codePromo'
                    placeholder='Code Promotion'
                    required
                  />
                 
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
                <select className='custom-select bMDBRowser-default' required>
                  <option value=''>Date de retour</option>
                  <option value='1'>23</option>
                  <option value='2'>03</option>
                  <option value='3'>09</option>
                </select>          
              </div>
              </div> 
            </MDBRow>
            <MDBRow>
            <div className='col-md-4 mb-3'>
                <p>Adulte</p>
               <MDBInputSelect getValue={this.getValue} min={1} max={15} value={1} className='mb-2' />
            </div>
            <div className='col-md-4 mb-3'>
              <p>Enfant</p>
               <MDBInputSelect getValue={this.getValue} min={0} max={15} value={0} className='mb-2' />
            </div>
            <div className='col-md-4 mb-3'>
               <p>Bébé</p>
               <MDBInputSelect  getValue={this.getValue} min={0} max={15} value={0} className='mb-2' />
            </div>    
            </MDBRow>      
          {/* </MDBCol>         */}
          <Link to="/reserveFin">
          <button className='btn w3-deep-purple' type='submit'>
              <h4>SUIVANT</h4>
          </button> 
        </Link>
          </form>
          </MDBCol> 
          
          </MDBRow>
          </MDBJumbotron>
            </SectionContainer>
          </MDBCol>
          );
      }
    }
export default ReservationSuit;      