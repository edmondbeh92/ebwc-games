import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import HomePage from "./Content/HomePage";
import { Games } from "./Content/Games/Games";
import Models from "./Content/Models/Models";
import "../style/shared/font.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faGamepad,
  faFighterJet,
  faCopyright,
  faEnvelope,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faGamepad, faFighterJet, faCopyright, faEnvelope, faTimes);

const App = () => (
  <BrowserRouter>
    <main class="bg-main">
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/games" component={Games} exact />
        <Route path="/3d_models" component={Models} exact />
      </Switch>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
