// https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-UI%2FUX%3A-Gericht?node-id=0%3A1&t=56ak6JKnzAuH7tZZ-0

import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery /> 
    <FindUs />
    <Footer />
  </div>
);

export default App;
