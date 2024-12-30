
import './App.css'
import { About } from './view/about/About';
import { Contact } from './view/contact/Contact';
import { Footer } from './view/footer/Footer';
import { Header } from './view/header/Header';
import { Hero } from './view/hero/Hero';
import { Projects } from './view/projects/Projects';
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero/>
        <About />
        <Projects />
        <Contact />
      </main>
     <Footer/>
    </div>
  );
}


export default App
