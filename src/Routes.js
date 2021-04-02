import React from 'react';

import Reservation from './pages/reservation'
import ReservationSuit from './pages/reservationSuit'
import ReservationFin from './pages/reservationFin'
import VoyageDisponible from './pages/voyageDispo'
import { BrowserRouter as Router, Route, Switch, Link,NavLink, Redirect } from 'react-router-dom';

class Routes extends React.Component {
    render() {
      return (
        <Switch>
          <Route exact path='/' component={Reservation} />
          <Route path="/reserveSuit" exact strict component={ReservationSuit}/> 
          <Route path="/reserveFin" exact strict component={ReservationFin}/> 
          <Route path="/voyageDispo" exact strict component={VoyageDisponible}/>  
          <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
