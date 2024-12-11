
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Reviews from './components/Reviews';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="menu"><Menu /></section>
      <section id="contact"><Contact /></section>
      {/* <section id="reviews"><Reviews /></section> */}
      <section id="footer"><Footer /></section>
      </div>
    </Router>
  );
}

export default App;
