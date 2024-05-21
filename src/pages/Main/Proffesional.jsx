import React from 'react'


import STLPages from '../pages.module.css';

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
      <tr className={`${STLPages.flexwrap} ${STLPages.ctr} ${STLPages.ulMuly}`}>
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
    <>
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
      
    </>
  )
}

export default Index