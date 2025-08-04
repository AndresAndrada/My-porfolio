import './App.css';
import * as React from 'react'
import Inicio from './componentes/Inicio/Inicio';
import Navbar from './componentes/NavBar/NavBar';
import Home from './componentes/Home/Home';
import { Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Loader } from './core/ui/Loader';

function App() {
  // console.log(window.pageYOffset, 'WIND APP');
  const location = useLocation()
  return (
    <React.Suspense fallback={
      <div className="h-screen w-full grid place-content-center">
        <Loader className="h-[4rem] w-[4rem]" />
      </div>
    }>
      <div className="App">
        {location.pathname !== '/' && <Route path='/' component={Navbar} />}
        <Route exact path='/' component={Inicio} />
        <Route exact path='/home' component={Home} />

      </div>
    </React.Suspense>

  );
}

export default App;





