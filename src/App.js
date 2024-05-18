import React, { useContext, useState } from 'react';

import { UserContext, FocusContext } from './components/contexts'

import Header from "./components/Header";

import Main from './pages/principal';
import Program from "./pages/program";
import Paint from './pages/paint';

import './App.css';

function App() {
  const { Focus } = useContext(FocusContext);
  const { } = useContext(UserContext);

  const Source =
  {
    Main: <Main />,
    Program: <Program />,
    Paint: <Paint />
  }

  const SourceApp = Source[Focus || 'Main'];

  return (
    <div className="App">
      <Header />
      <main style={{ width: '100%' }}>
        <h2>{Focus}</h2>
        <div className='main'>
          {SourceApp}

        </div>
      </main>
    </div>
  );
}



export default App;
