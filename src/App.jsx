
import './App.css'
import { About } from './view/about/About';
import { Contact } from './view/contact/Contact';
import { Footer } from './view/footer/Footer';
import { Header } from './view/header/Header';
import { Hero } from './view/hero/Hero';
import { Projects } from './view/projects/Projects';
import Skill from './view/skill/Skill';
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero/>
        <About />
        <Skill/>
        <Projects />
        <Contact />
      </main>
     <Footer/>
    </div>
  );
}


export default App
