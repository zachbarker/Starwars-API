import { React, useState } from 'react'
import NavBar from './components/NavBar'
import PeopleScreen from './screens/PeopleScreen'
import FilmScreen from './screens/FilmScreen'
import SpeciesScreen from './screens/SpeciesScreen'
import StarshipScreen from './screens/StarshipScreen'
import VehicleScreen from './screens/VehicleScreen'
import PlanetScreen from './screens/PlanetScreen'
import { findAllByTestId } from '@testing-library/dom'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();


const App = () => {

  return (
    
    <div className="container-fluid">

      <NavBar />

      <Router history={history}>
        <Switch>
          <Route path="/people" component={PeopleScreen} />
          <Route path="/species" component={SpeciesScreen} />
          <Route path="/starships" component={StarshipScreen} />
          <Route path="/vehicles" component={VehicleScreen} />
          <Route path="/planets" component={PlanetScreen} />
          <Route path="/" component={FilmScreen} />
        </Switch>
      </Router>


    </div>
  );
}


export default App;
