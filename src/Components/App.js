import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './Header/Header';
import { HomePage } from './Content/HomePage';
import { Games } from './Content/Games/Games';
import { GameContent } from './Content/Games/GameContent';
import { Models } from './Content/Models/Models';
import { ModelContent } from './Content/Models/ModelContent';
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
        <Route path='/games/:id' component={GameContent} />
        <Route path='/3d_models' component={Models} exact />
        <Route path='/3d_models/:id' component={ModelContent} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)
