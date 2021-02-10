import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Results from './components/results'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Animal Quiz</h1>
        <Switch>
          <Route exact path='/wildlife-quiz/' component={Home} />
          <Route exact path='/wildlife-quiz/results' component={Results} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
