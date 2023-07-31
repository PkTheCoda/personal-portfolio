import './App.css';
import Introduction from './Components/Introduction';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      {/* <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Analytics /> */}
      <h1 className='main-h1'>Hi there! This website is currently down due to privacy concerns. We apologize for any inconvenience!</h1>
    </>
  );
}

export default App;
