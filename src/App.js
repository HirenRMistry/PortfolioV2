import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Map from './components/Map';

import * as serviceWorker from "./serviceWorker";

import Projects from './data/projects.json'
import aboutMeInfo from './data/about.json'
import resumeInfo from './data/resume.json'
import travelData from './data/travel.json'
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header data={aboutMeInfo}/>
      <About data={aboutMeInfo}/>    
      <Portfolio data={Projects}/>
      <Resume data={resumeInfo}/>
      <Map data={travelData}/>
      <Contact data={aboutMeInfo}/>
      <Footer data={aboutMeInfo}/>
    </ChakraProvider>
  );
}

export default App;
serviceWorker.unregister();

