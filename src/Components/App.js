import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './Header/Header';
import { HomePage } from './Content/HomePage';
import { Games } from './Content/Games/Games';
import { Models } from './Content/Models/Models';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faGamepad,
  faFighterJet,
  faCopyright,
  faEnvelope,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBars,
  faGamepad,
  faFighterJet,
  faCopyright,
  faEnvelope,
  faTimes
);

export const App = () => (
  <BrowserRouter>
    <div class='bg-main'>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/games' component={Games} exact />
        <Route path='/3d_models' component={Models} exact />
      </Switch>
    </div>
  </BrowserRouter >
)
