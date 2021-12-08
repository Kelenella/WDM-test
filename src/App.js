import './App.css';
import { useState, useEffect } from 'react';
import Container from './components/Container';
import NavBarMobile from './components/NavBar/NavBar';
import Hero from './components/Hero';
import Form from './components/Form/Form';

function App() {
  return (
    <Container>
      <NavBarMobile />
      {/* <Hero /> */}
    </Container>
  );
}

export default App;
