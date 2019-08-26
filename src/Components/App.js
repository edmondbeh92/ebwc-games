import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './Header/Header';
import { HomePage } from './Content/HomePage';
import { Games } from './Content/Games';
import { Models } from './Content/Models';
import { Footer } from './Footer/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faGamepad,
  faFighterJet,
  faLink,
  faCopyright
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBars,
  faGamepad,
  faFighterJet,
  faLink,
  faCopyright
);

export const App = () => (
  <BrowserRouter basename='/home/'>
    <div style={{ background: '#36403b' }}>
      <Header />
      <HomePage />
      <Switch>
        <Route path='/games' component={Games} exact />
        <Route path='/3d_models' component={Models} exact />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)
