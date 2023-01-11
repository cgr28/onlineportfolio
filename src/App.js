import './App.scss';
import Home from "./sections/Home"
import Projects from "./sections/Projects"
// import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Resume from "./sections/Resume"
import AOS from 'aos';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <>
      <Home />
      <Projects />
      <Experience />
      <Resume />
    </>
  );
}

export default App;
