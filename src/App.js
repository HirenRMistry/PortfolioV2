import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import Header from './components/sections/Header';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import Skills from './components/sections/Skills';

import * as serviceWorker from "./serviceWorker";

import Projects from './data/projects.json'
import aboutMeInfo from './data/about.json'
import resumeInfo from './data/resume.json'
import skills from './data/skills.json'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header data={aboutMeInfo}/>
      <About data={aboutMeInfo}/>    
      <Portfolio data={Projects}/>
      <Resume data={resumeInfo}/>
      <Skills data={skills}/>
      <Contact data={aboutMeInfo}/>
      <Footer data={aboutMeInfo}/>
    </ChakraProvider>
  );
}

export default App;
serviceWorker.unregister();

