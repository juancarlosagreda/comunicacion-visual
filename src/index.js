import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, BrowserRouter } from 'react-router-dom'
import CovidComponent from './components/covid.component'
import InstalacionesComponent from './components/instalaciones.component'
import SanseComponent from './components/sanse.component'
import HomeComponent from './components/home.component'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Route path="/" exact component={App}/>
        <Route path="/home" exact component={HomeComponent}/>
        <Route path="/instalaciones" exact component={InstalacionesComponent}/>
        <Route path="/sanse" exact component={SanseComponent}/>
        <Route path="/covid" exact component={CovidComponent}/>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
