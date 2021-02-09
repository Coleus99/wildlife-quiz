import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Results from './components/results'

function App() {
  return (
    <HashRouter basename='/'>
      <div className="container">
        <Home />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/results' component={Results} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
