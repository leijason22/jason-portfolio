import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Contact from './components/contact/Contacts';
import Experience from './components/experience/Experience';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Resume from './components/resume/Resume';

//import everything in components

function App() {
  return (
    <>
    <Sidebar />
    <main className = 'main'>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Resume/>

    </main>

    </>


  );
}

export default App;
