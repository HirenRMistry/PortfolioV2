import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Detail from './Components/Detail';
import App2 from './example';
import styles from './index.css'
//
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(

  <App />,


  document.getElementById('root'));
registerServiceWorker();
