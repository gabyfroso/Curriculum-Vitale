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
import Principal from './pages/Principal/indexPage.js';
import Contacto from './pages/Contacto/indexPage.js';

import Program from "./pages/Programador/indexPage.js";
import Dibujo from './pages/Dibujo/indexPage.js';
import Medic from './pages/Medicina/indexPage.js';

/**
 * CSS (style)
 */
import STLpages from './pages/pages.module.css';
import './App.css';
import './pages/PagesAtt.css';

function porcentajeScroll(container, element) {
  let Porcentaje = 0;
  console.log('porcentajescroll');
  console.log(container);
  console.log(element);

  Porcentaje = (Math.min(element.button, container.button) -
    Math.max(element.top, container.top)) / element.height * 100;

  if (element.top >= container.top && element.button <= container.button) Porcentaje = 100;
  if (element.top < container.top && element.button > container.button) Porcentaje = 0;

  console.log(Porcentaje);

  return Porcentaje;
}

const handleScroll = (alis, container, element) => {
  const Porcentaje = porcentajeScroll(container, element);
  alis.style.transform = `scaleX(${Porcentaje}%)`
};

function App() {
  const { Focus } = useContext(FocusContext);
  const { } = useContext(UserContext);

  useEffect(() => {
    const asideLis = document.querySelectorAll('aside>ul>li');
    const sections = document.querySelectorAll('main>section');
    const articles = document.querySelectorAll('main>section>article');

    if (asideLis && articles && sections) {
      asideLis.forEach(li => li.classList.add('hidden'))
      articles.forEach(article => article.classList.add('hidden'))
      sections.forEach((section, i) => {
        section.setAttribute('article--i', i);
        section.classList.add('hidden')
      })
    } else {
      console.error('CRITICAL ERR, no se encontró:');
      console.error(`asideLis:${asideLis} sections:${sections} articles:${articles}`);
    };

    const observer_section_to_loading = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        const i_entry = entry.target.getAttribute('article--i') || 0;
        const AlisFocus = asideLis[i_entry];

        if (!AlisFocus) {
          console.error('critical err: AlisFocus no encontrado');
          console.log('Asideli:');
          console.log(asideLis);
          console.error(`i_article: ${i_entry}`);
          return;
        }
        console.log(entry);

        if (!entry.boundingClientRect) {
          console.error('bounding error');
          return;
        }

        if (!entry.rootBounds) {
          console.error('rootboundserr');
          return;
        }

        const container = {
          top: entry.target.getBoundingClientRect().top,
          bottom: entry.target.getBoundingClientRect().bottom,

          height: entry.target.getBoundingClientRect().height,
        }

        const element = {
          top: entry.rootBounds.top,
          bottom: entry.rootBounds.bottom,

          height: entry.rootBounds.height,
        }

        //const handleScroll_observer = handleScroll(AlisFocus, container, element);
        
        if (entry.isIntersecting) {
          AlisFocus.classList.add('show');
          //window.addEventListener('scroll', handleScroll_observer);
        } else {
          AlisFocus.classList.remove('show');
          //window.removeEventListener('scroll', handleScroll_observer);
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

    document.querySelectorAll('section.hidden').forEach(el => observer_section_to_loading.observe(el));
    document.querySelectorAll('section .hidden').forEach(el => observer_articles.observe(el));

  }, [])


  const SMain = () => {
    return (
      <>
        <Principal />
        <div className='jump--1' />
        <Program />
        <div className='jump--2' />
        <Dibujo />
        <div className='jump--3' />
        <Medic />
      </>
    )
  }
  const Source =
  {
    Main: <SMain />,
    Contacto: <Contacto />,

    default: <SMain />
  }

  const SourceApp = Source[Focus || 'Main'];

  return (
    <div className="App">
      <Header />
      <Aside />
      <div style={{ width: '100%' }} className={STLpages.DIVmain}>
        <h2 className={STLpages.novisable}>{Focus}</h2>
        <main>
          {SourceApp}
        </main>
      </div>
    </div>
  );
}



export default App;
