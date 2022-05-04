import './App.scss';
import './components/components.scss';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Services from './pages/services/Services';
import Portfolio from './pages/portfolio/Portfolio';
import Testimonials from './pages/testimonials/Testimonials';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
