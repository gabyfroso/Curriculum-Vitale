import React from 'react'

import STLPages from '../pages.module.css';

function Academico() {
    return (
        <ul>
            <div>
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
                    <abbr>Ingenieria Electronica </abbr>
                    <abbr>Ingeniería en Sistemas </abbr>
                </li>
            </div>
            <div className={STLPages.liNoWrap_C}>
            <li>
                <h3>Instituto de Formación Profesional (NOA)</h3>
                <abbr>Asistente Paramédico</abbr>
                <abbr></abbr>
            </li>
            </div>

        </ul>
    )
}

function Index() {
    return (
        <div className={`${STLPages.ulMuly} ${STLPages.liNoWrap_C} ${STLPages.ulCenter}`}>
            <h1 className={`${STLPages.ctr}`}>Educación</h1>
            <Academico />
        </div>
    )
}

export default Index