import React, { useContext } from 'react';

import { UserContext, FocusContext } from './components/contexts'

import Header from "./components/Header";
import Aside from './components/Aside.js';

import Principal from './pages/Principal/indexPage.js';
import Contacto from './pages/Contacto/indexPage.js';

import Program from "./pages/Programador/indexPage.js";
import Dibujo from './pages/Dibujo/indexPage.js';
import Medic from './pages/Medicina/indexPage.js';


import Error from './pages/Error';

import STLpages from './pages/pages.module.css';
import './App.css';
import './pages/PagesAtt.css';

function App() {
  const { Focus } = useContext(FocusContext);
  const { } = useContext(UserContext);

  const Source =
  {
    Main:
      <>
        <Principal/>
        <div className='salto1 salto' />
        <Program />
        <div className='salto2 salto' />
        <Dibujo />
        <div className='salto3 salto' />
        <Medic/>
      </>,
    Contacto: <Contacto />,

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
          { SourceApp }
        </main>
      </div>
    </div>
  );
}



export default App;
