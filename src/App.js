import './App.css';
import Introduction from './Components/Introduction';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import NewPortfolioBanner from './Components/NewPortfolioBanner';
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <NewPortfolioBanner />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
