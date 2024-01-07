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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

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
