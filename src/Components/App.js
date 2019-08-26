import React from 'react';
import { Header } from './Header/Header';
import { Content } from './Content/Content';
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
  <div style={{ background: '#36403b' }}>
    <Header />
    <Content />
    <Footer />
  </div>
)
