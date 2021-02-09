import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Results from './components/results'

function App() {
  return (
    <BrowserRouter basename='/'>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/results' component={Results} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
