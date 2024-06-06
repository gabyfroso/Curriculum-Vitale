import React, { useContext, useEffect } from 'react';

import { UserContext, FocusContext } from './components/contexts'

/**
 * Headers
 */
import Header from "./components/Header";
import Aside from './components/Aside.js';

/**
 * PAGES
 */
// CV

import IndexCV from './pages/CV/indexPage.js';

//Inicio

import Principal from './pages/Inicio/Principal/indexPage.js';
import Program from "./pages/Inicio/Programador/indexPage.js";

import Dibujo from './pages/Inicio/Dibujo/indexPage.js';
import Medic from './pages/Inicio/Medicina/indexPage.js';
import Electronica from './pages/Inicio/Electronica/indexPage.js';

//Contacto
import Contacto from './pages/Contacto/indexPage.js';
/**
 * CSS (style)
 */
import './pages/pages.css';
import './App.css';
import './pages/PagesAtt.css';
import './pages/PagesAnimations.css'

function ScrollTo(Focus, ObjetFocus) {
  if (Focus === 'Main') {
    const Main = document.querySelector('Main');
    const programacion = document.querySelector('.programacion');
    const dibujo = document.querySelector('.dibujo');
    const medicina = document.querySelector('.medicina');
    const electronica = document.querySelector('.electronica');

    const ScrollConst = {
      Main, programacion, dibujo, medicina, electronica,
      paramedic: medicina,
      default: Main
    }

    if (ScrollConst[ObjetFocus]) {
      ScrollConst[ObjetFocus].scrollIntoView({ behavior: 'smooth' })
    } else {
      console.error(`Focus: ${Focus} ObjFocus: ${ObjetFocus}`);
      console.error(`No encontrado ${ScrollConst}[${ObjetFocus}] ${ScrollConst[ObjetFocus]}`);
    }
  }

  if (Focus === 'Contacto') {

  }
}

function AnimationMain(toreturn = false) {
  const observerSectionBool = false;


  const asideLis = document.querySelectorAll('aside>ul>li');
  const sections = document.querySelectorAll('main>section');
  const articles = document.querySelectorAll('main>section>article');

  if (asideLis && articles && sections) {
    asideLis.forEach((li, i) => {
      if (i !== 0) li.classList.add('hidden')
      li.classList.remove('show');
    });

    articles.forEach((article, i) => {
      if (i !== 0) article.classList.add('hidden')
    });

    observerSectionBool?? sections.forEach((section, i) => {
      section.setAttribute('article--i', i);
      section.classList.add('hidden');
    });


  } else {
    console.error('CRITICAL ERR, no se encontró:');
    console.error(`asideLis:${asideLis} sections:${sections} articles:${articles}`);
  };


  //Depende de observerSectionBool
  const observer_section_to_loading = new IntersectionObserver(entries => {
    if (!observerSectionBool) return;

    entries.forEach((entry) => {
      const i_entry = entry.target.getAttribute('article--i') || 1;
      const AlisFocus = asideLis[i_entry];

      if (!AlisFocus) {
        console.error('critical err: AlisFocus no encontrado');
        console.log('Asideli:');
        console.log(asideLis);
        console.error(`i_article: ${i_entry}`);
        return;
      }

      if (entry.isIntersecting) {
        AlisFocus.classList.add('show');
      } else {
        AlisFocus.classList.remove('show');
      }
    });
  });




  const observer_articles = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    })
  })
  
  if (toreturn) {
    observer_articles.disconnect()
    
    //Depende de observerSectionBool
    observerSectionBool ?? observer_section_to_loading.disconnect();

    asideLis.forEach((li, i) => {
      if (i !== 0) li.classList.remove('hidden');
    });

    articles.forEach((article, i) => {
      if (i !== 0) article.classList.remove('hidden');
    });

    sections.forEach((section, i) => {
      section.classList.remove('hidden');
    });

    return;
  }

  //document.querySelectorAll('section.hidden').forEach(el => observer_section_to_loading.observe(el));
  document.querySelectorAll('section .hidden').forEach(el => observer_articles.observe(el));

}

function AllAnimations() {
  AnimationMain();
}


function App() {
  const { Focus, ObjetFocus } = useContext(FocusContext);
  const { } = useContext(UserContext);

  useEffect(() => {
    AllAnimations();

    Focus !== 'Main' ?? AnimationMain(false);

  }, [Focus])



  useEffect(() => {
    ScrollTo(Focus, ObjetFocus);
  }, [Focus, ObjetFocus])



  const SMain = () => {
    return (
      <>
        <div className='jump--0 Main' style={{ height: 0 }} />
        <Principal />
        <div className='jump--1 programacion' />
        <Program />
        <div className='jump--2 dibujo' />
        <Dibujo />
        <div className='jump--3 electronica' />
        <Electronica />
        <div className='jump--4 medicina' />
        <Medic />
      </>
    )
  }
  const Source =
  {
    Main: <SMain />,
    Contacto: <Contacto />,
    CV: <IndexCV />,

    default: <SMain />
  }

  const SourceApp = Source[Focus || 'Main'];

  return (
    <div className="App">
      <Header />
      <Aside />
      <div style={{ width: '100%' }} className={'DIVmain'}>
        <h2 className={'novisable'}>{Focus}</h2>
        <main>
          {SourceApp}
        </main>
      </div>
    </div>
  );
}



export default App;
