import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { HomePage } from "./Content/HomePage";
import { Games } from "./Content/Games/Games";
import { GameContent } from "./Content/Games/GameContent";
import { Models } from "./Content/Models/Models";
import { ModelContent } from "./Content/Models/ModelContent";

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

export const App = () => (
  <BrowserRouter>
    <div class="bg-main">
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/games" component={Games} exact />
        <Route path="/games/:game_id" component={GameContent} />
        <Route path="/3d_models" component={Models} exact />
        <Route path="/3d_models/:model_id" component={ModelContent} />
      </Switch>
    </div>
  </BrowserRouter>
);
