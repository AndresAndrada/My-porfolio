import './App.css';
import Inicio from './componentes/Inicio/Inicio';
import Navbar from './componentes/NavBar/NavBar';
import Home from './componentes/Home/Home';
import CurriculumVitae from './componentes/CurriculumVitae/CurriculumVitae';
import About from './componentes/About/About';
import { Route } from 'react-router-dom';
import Project from './componentes/Project/Project';
import Footer from './componentes/Footer/Footer';
import Contac from './componentes/Contac/Contac';
import TechnologyComp from './componentes/Technology/TechnologyComp/TechnologyComp';
import Reviews from './componentes/Reviews/Reviews';

function App() {
  // console.log(window.pageYOffset, 'WIND APP');
  return (
    <div className="App">
      <Route path='/' component={ Navbar } />
      <Route exact path='/' component={ Inicio } />
      <Route exact path='/home'  component={ Home }/>
      <Route path='/curriculumvitae' component={ CurriculumVitae } />
      <Route path='/about' component={ About } />
      <Route path='/project' component={ Project } />
      <Route path='/technology' component={ TechnologyComp } />
      <Route path='/reviews' component={ Reviews } />
      <Route path='/contact' component={ Contac } />
      <Route path='/' component={ Footer } />
    </div>
  );
}

export default App;





