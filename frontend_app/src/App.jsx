import React, { Fragment } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'

import Home from "./Components/Home/Home";
import SuperHero from "./Components/SuperHero/SuperHero";
import Ranking from "./Components/Ranking/Ranking";

export default function App(){

  return (
    <Fragment >
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/superhero/:id">
            <SuperHero />
          </Route>
          <Route exact path="/ranking">
            <Ranking />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  )
}