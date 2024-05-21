import React, { useContext } from 'react';

import { UserContext, FocusContext } from './components/contexts'

import Header from "./components/Header";

import Main from './pages/Main/indexPage.js';
import Contacto from './pages/Contacto/indexPage.js';

import Program from "./pages/Programador/indexPage.js";
import Electronica from './pages/Electronica/indexPage.js';
import Dibujo from './pages/Dibujo/indexPage.js';
import Medic from './pages/Medicina/indexPage.js';


import Error from './pages/Error';

import STLmain from './components/css/main.module.css';
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
      <div style={{ width: '100%' }} className={STLmain.DIVmain}>
        <h2 className={STLmain.novisable}>{Focus}</h2>
        <main>
          {SourceApp}
        </main>
      </div>
    </div>
  );
}



export default App;
