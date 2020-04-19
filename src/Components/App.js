import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Content/Home";
import Games from "./Content/Games/Games";
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
    <main className="bg-main">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/games" component={Games} exact />
        <Route path="/games/:name" component={Games} exact />
        <Route path="/3d_models" component={Models} exact />
        <Route path="/3d_models/:name" component={Models} exact />
        <Route
          render={() => <h2 className="text-center">404: PAGE NOT FOUND!</h2>}
        />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
