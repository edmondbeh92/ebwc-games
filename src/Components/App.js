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
  faLink
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBars,
  faGamepad,
  faFighterJet,
  faLink
);

export const App = () => (
  <>
    <Header />
  </>
)
