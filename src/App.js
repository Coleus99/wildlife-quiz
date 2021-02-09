import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Results from './components/results'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/results' component={Results} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
