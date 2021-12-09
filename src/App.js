import './App.css';
import Container from './components/Container';
import NavBarMobile from './components/NavBar/NavBar';
import Hero from './components/Hero';
import OurForm from './components/Form/OurForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Container>
      <NavBarMobile />
      <main>
        <Hero />
        <OurForm />
      </main>
      <Footer />
    </Container>
  );
}

export default App;
