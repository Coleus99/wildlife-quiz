import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Results from './components/results'

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/results' component={Results} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
