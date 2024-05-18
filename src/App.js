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

  const [Extras_1, setExtras_1] = useState(true);

  const OnOffExtra_1 = () => {
    setExtras_1(!Extras_1);
  }
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

      {
        /**
         * 
        <div id='Important'>
        <button onClick={OnOffExtra_1}
          className='iButton'>
          i
        </button>
        {
          Extras_1 &&
          <>
            <abbr>{Focus}</abbr>
          </>
        }
      </div>
         */
      }

      <main style={{ width: '100%' }}>

        <div className='main'>
          {SourceApp}

        </div>
      </main>
    </div>
  );
}



export default App;
