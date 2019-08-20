import React from 'react';
import EBWC_Games from './EBWC_Games'
import Header from './Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={EBWC_Games} />
        <Route exact path='/:categories' component={EBWC_Games} />
      </Switch>
    </BrowserRouter>

    <Header />
    <h1 className='btn btn-outline-primary rounded-pill px-5 m-5'>React test</h1>
  </>
)

export default App;
