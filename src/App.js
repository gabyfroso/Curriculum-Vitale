import React, { useContext } from 'react';

import { UserContext, FocusContext } from './components/contexts'

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
      <h1>{Focus}</h1>
      {SourceApp}
    </div>
  );
}



export default App;
