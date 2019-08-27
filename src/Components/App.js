import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './Header/Header';
import { HomePage } from './Content/HomePage';
import { Games } from './Content/Games/Games';
//import { Models } from './Content/Models/Models';
import { Footer } from './Footer/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faGamepad,
  faFighterJet,
  faCopyright,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBars,
  faGamepad,
  faFighterJet,
  faCopyright,
  faEnvelope
);

export const App = () => (
  <BrowserRouter>
    <div style={{ background: '#36403b' }}>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/games' component={Games} exact />
        <Route path='/games/:id' component={Games} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)
