import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import * as serviceWorker from "./serviceWorker";

import Projects from './data/projects.json'
import aboutMeInfo from './data/about.json'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header data={aboutMeInfo}/>
      <About data={aboutMeInfo}/>    
      <Portfolio data={Projects}/>
      <Contact data={aboutMeInfo}/>
      <Footer data={aboutMeInfo}/>
    </ChakraProvider>
  );
}

export default App;
serviceWorker.unregister();

