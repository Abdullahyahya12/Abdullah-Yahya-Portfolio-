import { useEffect, useState } from "react";
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Skills from './Component/Skills'
import Projects from './Component/Projects'
import Experience from './Component/Experience'
import Services from './Component/Services'
import DeveloperStats from './Component/DeveloperStats'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import BackToTop from './Component/BackToTop'


function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-slate-950 text-slate-100"
          : "min-h-screen bg-white text-slate-900"
      }
    >
      <Navbar darkMode={darkMode} onToggleTheme={toggleTheme} />
    <main>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <DeveloperStats darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </main>
    <Footer   darkMode={darkMode} />
      <BackToTop  />
    </div>
  )
}



export default App
