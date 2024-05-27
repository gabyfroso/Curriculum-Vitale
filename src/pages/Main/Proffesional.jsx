import React from 'react'

import JSONProffesional from '../json/proffesional.json';

import STLMain from './Main.module.css';
import STLPages from '../pages.module.css';

function Experiencias() {
  return (
    <ul className={STLPages.liNoWrap_C}>
      {
        Array.isArray(JSONProffesional.Experiencias_Laborales) &&
        JSONProffesional.Experiencias_Laborales.map((itemH, i) => {

          return (
            <li key={itemH.title ?? i}>
              <h3> {itemH.title} </h3>
              {
                Array.isArray(itemH.items) &&
                itemH.items.map((itemP, i_p) => (<p key={itemP ?? i_p}> {itemP} </p>))
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
      {
        Array.isArray(JSONProffesional.Habilitys) &&

        JSONProffesional.Habilitys.map((itemH, i) => {
          //espacio por si hay errores

          //error en key i_p, no se puede usar item por (basic)
          return (
            <li key={i}>
              <abbr> {itemH.title} </abbr>
              {
                Array.isArray(itemH.p) && itemH.p.map((itemP, i_p) => (
                  <p key={i_p}> {itemP} </p>
                ))
              }
            </li>
          )
        })
      }
    </ul>
  )
}


function Conocimientos() {
  return (
    <div className={`${STLPages.flexwrap} ${STLPages.ctr}`}>
      {
        Array.isArray(JSONProffesional.Conocimientos) &&

        JSONProffesional.Conocimientos.map((itemH, i) => {
          //espacio por si hay errores

          return (
            <li key={itemH.title ?? i}>
              <abbr> {itemH.title} </abbr>
              {
                Array.isArray(itemH.items) &&
                itemH.items.map((itemP, i_p) => (<p key={itemP ?? i_p}> {itemP} </p>))
              }
            </li>
          )
        })
      }
    </div>
  )
}

function Index() {
  return (
    <div className={`${STLMain.Professional} ${STLPages.ulCenter}`}>
      {
        // eslint-disable-next-line eqeqeq
        JSONProffesional.Experiencias_Laborales[0].title != '' &&

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
        <Conocimientos />
      </div>

    </div>
  )
}

export default Index