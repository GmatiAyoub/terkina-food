import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <Testimonials />
      {/* On ajoutera les autres sections plus tard */}
    </div>
  );
}

export default App;