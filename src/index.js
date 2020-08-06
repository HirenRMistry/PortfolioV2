import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Detail from './Components/Detail';
import PortfolioItem from './Components/PortfolioItem';
import styles from './index.css'
import ReactTooltip from "react-tooltip";

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/portfolio/:id" component={PortfolioItem}/>
      </Switch>
  </BrowserRouter>,


  document.getElementById('root'));
registerServiceWorker();
