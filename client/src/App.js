// import logo from './logo.svg';
import './style/style.css';
import { Switch, Route } from 'react-router-dom'
import { HomePage, DetailPage, LandingPage, FilterTgl } from './pages'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ LandingPage } />
        <Route path="/home" component={ HomePage } />
        <Route path="/detail" component={ DetailPage } />
        <Route path="/filtertgl" component={ FilterTgl } />
      </Switch>
    </>
  );
}

export default App;
