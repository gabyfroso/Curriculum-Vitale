import React, { useContext, useState } from 'react';

import { UserContext, FocusContext } from './components/contexts'

import Header from "./components/Header";

import Main from './pages/principal';
import Contacto from './pages/contacto'

import Program from "./pages/program";
import Electronica from './pages/Electronica';
import Dibujo from './pages/Dibujo';
import Medic, { AuxParam, Veterinaria } from './pages/Medicina';


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
    expParamedic: <AuxParam />,
    expVeterinaria: <Veterinaria />,

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
