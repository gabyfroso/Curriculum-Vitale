import React from 'react'

import STLMain from './Main.module.css';
import STLPages from '../pages.module.css';

const ExpLaborales = [
  {
    title: '',
    fullp: ['']
  }
]

function Nli({ title = '', children }) {
  return (
    <li>
      <h3> {title} </h3>
      <p>{children}</p>
    </li>
  )
}

function Experiencias() {
  return (
    <ul className={STLPages.liNoWrap_C}>
      {
        ExpLaborales && ExpLaborales.map(item => {
          const Name = item.title !== '' ? item.title : 'Sin experiencia laboral';

          return (
            <li key={Name}>
              <h3> {Name} </h3>
              {
                item.fullp.map(elem => (<p key={elem}>{elem}</p>))
              }
            </li>
          )
        })
      }

    </ul>
  )
}

function Habilidades() {


  return (
    <ul className={STLPages.liDistanceItem}>
      <Nli title={'Quick Fix'}>
        Puedo ser capaz de priorizar el funcionamiento antes que la optimización, ideal para una solución rápida al cliente, y darle más tiempo al servidor de optimizarlo.
      </Nli>
      <Nli title='Perfil técnico'>
        Presento resoluciones creativas para los problemas, y puedo hacerlo con recursos limitados si se me presenta.
      </Nli>
      <li>
        <h3>Experiencia por secundaria técnica</h3>
        <p>Manejo y reparación de elementos eléctricos</p>
        <p>Rápido entendimiento de elementos electrónicos</p>
      </li>
      <Nli title='Integración al rol'>
        Puedo llegar a ser un buen lider, como bueno para seguir las ordenes y sugerir si me lo permiten para una resolución alternativa.
      </Nli>
      <Nli title='Investigador'>
        Mis habilidades para la investigación pueden aportar significativamente en las necesidades del proyecto final.
      </Nli>
    </ul>
  )
}
function Conocimientos() {
  const Programacion = ['javascript', 'java (basic)', 'SQL (basic)'];
  const Pages = ['html', 'css', 'js', 'Front-End', 'Back-End (basic)']
  const Programas = ['Linux (basic)', 'VSCode', 'Photoshop (basic)', 'Windows']
  const Otros = ['Respiración Cardio Pulmonar (RCP)'];

  return (
    <tr className={`${STLPages.flexwrap} ${STLPages.ctr}`}>
      <td>
        <h3>Programacion</h3>
        <ul>
          {
            Programacion.map(elem => (
              <li key={elem}> {elem} </li>
            ))
          }
        </ul>
      </td>
      <td>
        <h3>Paginas</h3>
        <ul>
          {
            Pages.map(elem => (
              <li key={elem}> {elem} </li>
            ))
          }
        </ul>
      </td>
      <td>
        <h3>Programas & OS</h3>
        <ul>
          {
            Programas.map(elem => (
              <li key={elem}> {elem} </li>
            ))
          }
        </ul>
      </td>
      <td>
        <h3>Otros</h3>
        <ul>
          {
            Otros.map(elem => (
              <li key={elem}> {elem} </li>
            ))
          }
        </ul>
      </td>
    </tr>
  )
}

function Index() {
  return (
    <div className={`${STLMain.Professional} ${STLPages.ulCenter}`}>
      {
        // eslint-disable-next-line eqeqeq
        ExpLaborales[0].fullp != '' && 
      <div>
        <h2>Experiencias Laborales</h2>
        <Experiencias />
      </div>
      }

      <div>
        <h2>Habilidades</h2>
        <Habilidades />
      </div>
      <div>
        <h2>Conocimientos</h2>
        <table>
          <tbody>
            <Conocimientos />
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Index