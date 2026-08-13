import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <Testimonials />
      <About />
      {/* On ajoutera les autres sections plus tard */}
    </div>
  );
}

export default App;