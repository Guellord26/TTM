import React, { Component, useState } from 'react';
import {
  
  MDBContainer, MDBRating,
  MDBRow,
  MDBCol

} from 'mdbreact';
import SectionContainer from './components/sectionContainer';
import Reservation from './pages/reservation'
import Routes from './Routes'
import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import NosClasses from './pages/nosclasses';
import NosDestination from './pages/nosDestination';
import Footer from './navigation/footer'
import baniere from './assets/Baniere.png'

const App = () => {
 

    return (
      <Router>
      <div className="w3-containe w3center">
        {/* ============================== Header =============================== */}
        <div className="w3-display-container w3-hide-small " style={{marginTop:'-120px'}}>
        <header className="w3-display-container w3-container w3-deep-purple w3-wide  w3-center w3-padding-128" id="home" style={{marginTop:'50px'}} style={{height:'300px'}}>
        {/* <div className="slogan w3-display-middle w3-margin-top w3-center"style={{width:'810px'}}> */}
        {/* <img src={ baniere} style={{width:'100%'}}/> */}
        {/* <h1 className="w3-xxlarge" style={{marginTop:'40px'}} ><span className="w3-border w3-border-white w3-padding">JUNGO</span> <span class="w3-hide-small"> STUDY</span></h1> */}
        {/* <h6 className="w3-large Lobster_">Apprenez des autres</h6>
        <h6 className="w3-large Lobster_">et partagez votre savoir avec d'autres</h6>
        <h6 className="w3-large Lobster_">pour faire un monde meilleur</h6>
        <h6 className="w3-large Lobster_">Découvrons ensemble les compétences de demain.</h6>*/}
        
      {/* </div> */}
    </header>
   
       </div>
        {/* =====================================================================  style={{position:'relative'}}*/}
        
          <div className="w3-btn-group w3-round w3-center" style={{marginTop:'0px'}}>  
                
            
              <NavLink to="/" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{backgroundColor:'green'}}>
                <button className="w3-bar-item w3-text-white w3-deep-purple w3-hover-white w3-hover-text-deep-purple w3-padding-large w3-button "
                 style={{width:'15.3%'}}>RESERVATIONS</button>
              </ NavLink>
            
              <NavLink to="/reserveSuit" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{color:'green'}}>
                <button className="w3-bar-item w3-text-white w3-deep-purple w3-hover-white w3-hover-text-deep-purple w3-padding-large w3-button " style={{width:'15.3%'}}>
                  VOYAGES
                </button>
            </NavLink>
            
            <NavLink to="/promotion" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{color:'green'}}>
                <button className="w3-bar-item w3-text-white w3-deep-purple w3-hover-white w3-hover-text-deep-purple w3-padding-large w3-button " style={{width:'15.3%'}}>
                  PROMOTIONS
                </button>
            </NavLink>
            <NavLink to="/contact" className="w3-text-white w3-hover-text-deep-purple" exact activeStyle={{color:'green'}}>
                <button className="w3-bar-item w3-text-white w3-deep-purple w3-hover-white w3-hover-text-deep-purple w3-padding-large w3-button " style={{width:'15.3%'}}>
                CONTACT
                </button>
            </NavLink>
          </div>
          <div style={{marginTop:'50px'}}>
          {/* <Route path="/reservation" exact strict render={
                () =>{
                  return(<h1 className="w3-center"> RESERVATION</h1>);
                }
              }/>
            <Route path="/voyage" exact strict render={
              () =>{
                return(<h1 className="w3-center"> VOYAGES</h1>);
              }
            }/>
             <Route path="/promotion" exact strict render={
              () =>{
                return(<h1 className="w3-center"> PROMOTIONS</h1>);
              }
            }/>
            <Route path="/contact" exact strict render={
              () =>{
                return(<h1 className="w3-center"> CONTACT</h1>);
              }
            }/> */}
          </div>
          <MDBContainer> 
          
          {/* ========================= Reservation ========================= */}
          <MDBRow style={{marginTop:'50px'}}>          
                 {/* <Reservation /> */}
                 <Routes />
          </MDBRow>
          {/* ========================CLASSES============================= */}
          <div>
            <NosClasses/>
          </div>
         {/* ====================== DESTINATIONS ======================= */} 
        <div><NosDestination/></div>
        {/* ============================================================= */}
      
      </MDBContainer> 
          {/* ======================= FOOTER ============================ */}
          <div><Footer/></div>
          {/* ============================================================= */}
       
        
      </div>  
      </Router>
    );
  }
// } 

export default App;
