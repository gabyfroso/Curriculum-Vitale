import React, { useContext } from 'react';

import { UserContext, FocusContext } from './components/contexts'

import Header from "./components/Header";
import Aside from './components/Aside.js';

import Main from './pages/Main/indexPage.js';
import Contacto from './pages/Contacto/indexPage.js';

import Program from "./pages/Programador/indexPage.js";
import Electronica from './pages/Electronica/indexPage.js';
import Dibujo from './pages/Dibujo/indexPage.js';
import Medic from './pages/Medicina/indexPage.js';


import Error from './pages/Error';

import STLpages from './pages/pages.module.css';
import './App.css';

function App() {
  const { Focus } = useContext(FocusContext);
  const { } = useContext(UserContext);

  const Source =
  {
    Main: <Main />,
    Contacto: <Contacto />,

    expProgramacion: <Program />,
    expElectronica: <Electronica />,
    expDibujo: <Dibujo />,
    expMedic: <Medic />,
    expParamedic: <Medic Focus={'expParamedic'} />,
    expVeterinaria: <Medic Focus={'expVeterinaria'} />,

    default: <Error />
  }

  const SourceApp = Source[Focus || 'Main'];

  return (
    <div className="App">
      <Header />
      <Aside />
      <div style={{ width: '100%' }} className={STLpages.DIVmain}>
        <h2 className={STLpages.novisable}>{Focus}</h2>
        <main>
          <Main />
          <div className='salto1 salto' />
          <Program />
          <div className='salto2 salto' />
          <Dibujo />
        </main>
      </div>
    </div>
  );
}



export default App;
