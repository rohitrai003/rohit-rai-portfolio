import Navbar from "./components/navbar";
import Hero from "./components/heroSection";

import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contact";
import ProjectCard from "./components/projectCard";
import SkillsSection from "./components/skillsSection";

export default function Home() {
  return (
    <div className="bg-zinc-50 flex align-top justify-center w-full h-fit flex-col scroll-smooth  ">
      <Navbar/>
      <Hero/>
      <About/>
      <SkillsSection/>
      <Contact/>
      <Footer/>
    </div>
  );
}
