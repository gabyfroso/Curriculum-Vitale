import React from 'react'

import STLPages from '../components/css/pages.module.css';

function Encabezado() {
  const Email = 'gabyfroso@gmail.com';
  const PhoneNumber = '+5493816164351'

  return (
    <tr>
      <td>
        <h1> HUGO GABRIEL FROSONI </h1>
        <h2> Programador </h2>
        <h3> Técnico Electrónico </h3>
        <h3> Asistente Paramédico </h3>
      </td>

      <td>
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

function Professional() {
  return (
    <tr>
      <td>
        <h1>Perfil Profesional</h1>

        <h2>
          Habilidades
        </h2>
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
      </td>
    </tr>
  )
}

function Academico() {
  return (
    <tr>
      <td>
        <h2>Educación</h2>
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
      </td>
    </tr>
  )
}

function principal() {
  return (
    <div>

      <table className={`${STLPages.Table_Principal} ${STLPages.ulWithStyle}`}>
        <tbody>
          <Encabezado />

          <Professional />

          <Academico />
        </tbody>
      </table>


    </div>
  )
}

export default principal