import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

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
      {/* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */}
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

