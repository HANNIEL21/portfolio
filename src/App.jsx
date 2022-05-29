import './App.scss';
import './components/components.scss';

import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Services from './pages/services/Services';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Home/>
      <Nav/>
      <About/>
      <Experience/>
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
