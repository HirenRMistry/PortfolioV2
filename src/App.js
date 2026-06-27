import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Map from './components/Map';

import projects from './data/projects.json';
import about from './data/about.json';
import resume from './data/resume.json';
import travel from './data/travel.json';

const theme = extendTheme({
  fonts: {
    heading: `'Space Grotesk', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header data={about} />
      <About data={about} />
      <Portfolio data={projects} />
      <Resume data={resume} />
      <Map data={travel} />
      <Contact data={about} />
      <Footer data={about} />
    </ChakraProvider>
  );
}

export default App;
