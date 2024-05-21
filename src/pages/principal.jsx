import React from 'react'

import STLPages from '../components/css/pages.module.css';

function Encabezado() {
  const Email = 'gabyfroso@gmail.com';
  const PhoneNumber = '+5493816164351'

  return (
    <tr className={`${STLPages.flexwrap}`}>
      <td style={{ flexGrow: 1 }} className={`${STLPages.ctr}`}>
        <h1> HUGO GABRIEL FROSONI </h1>
        <h2> Programador </h2>
        <h3> Técnico Electrónico </h3>
        <h3> Asistente Paramédico </h3>
      </td>

      <td style={{ width: 300 }} className={STLPages.ctr}>
        <h2>Contacto</h2>
        <h3>
          <a href={`mailto:${Email}`}> {Email} </a>
        </h3>
        <h3>
          <a href={`tel:${PhoneNumber}`}>{PhoneNumber}</a>
        </h3>
        <h3>Tucumán, San Miguel de Tucumán</h3>
      </td>
    </tr>
  )
}
function Habilidades() {
  return (
    <ul>
      <li>
        <h3> Constancia </h3>
        <p>
          Sólida capacidad para mantener constancia en los objetivos, problemas y proyectos. Refleja un enfoque disciplinado para solución de problemas de cualquier índole, permitiendo aprender y adaptarme a los entornos y hábitos más rápido de lo habitual.
        </p>
      </li>

      <li>
        <h3> Quick Fix </h3>
        <p>
          Durante mi tiempo en una escuela técnica, desarrollé una habilidad destacada para soluciones rápidas y efectivas, priorizándola antes que la optimización en caso de ser necesario. Esto me permitirá mantener funcional para el cliente, mientras que en el servidor solo será necesario la optimización.
        </p>
      </li>

      <li>
        <h3>Perfil técnico</h3>
        <p>
          Hábil ante resolución de problemas, incluso cuando los recursos son excasos. Mi capacidad para encontrar soluciones creativas y eficientes permite el alcance de objetivos ante cualquier situación.
        </p>
      </li>

      <li>
        <h3>Investigación</h3>
        <p>
          Tengo habilidades moldeables ante la investigación por internet, pudiendo tener un mayor progreso ante nuevas técnicas y adoptandolo a los proyectos, me comprometo a mejorarlo contínuamente y adoptarlas segun las necesidades del proyecto.
        </p>
      </li>
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



function Academico() {
  return (
    <ul>
      <li>
        <h3>Primario:</h3>
        <abbr>Escuela de la patria doctor Manuel Belgrano</abbr>
      </li>
      <li>
        <h3>Secundario:</h3>
        <abbr>Técnica 2 Obispo Colombres</abbr>
      </li>
      <li>
        <h3>Universidad:</h3>
        <abbr>Universidad Tecnológica Nacional (UTN):</abbr>
        <abbr>Ingenieria Electronica - </abbr>
        <abbr>Ingeniería en Sistemas </abbr>
      </li>
      <li>
        <h3>Instituto de Formación Profesional (NOA)</h3>
        <abbr>Asistente Paramédico</abbr>
        <abbr></abbr>
      </li>
    </ul>
  )
}

function principal() {
  return (
    <div className={`${STLPages.principal} ${STLPages.ulWithStyle}`}>
      <div>
        <table className={`${STLPages.Table_Principal} `}>
          <tbody>
            <Encabezado />
          </tbody>
        </table>
      </div>


      <div>
        <h1 className={STLPages.ctr}>Perfil Profesional</h1>
      </div>

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

      <div>
        <h1 className={STLPages.ctr}>Educación</h1>
        <Academico />
      </div>
    </div>
  )
}

export default principal