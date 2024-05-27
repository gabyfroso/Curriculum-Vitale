import React from 'react'

import STLPages from '../pages.module.css';

function Academico() {
    return (
        <ul>
            <div>
                <li>
                    <abbr>Primario (completo):</abbr>
                    <p>Escuela de la Patria Doctor Manuel Belgrano</p>
                </li>
                <li>
                    <abbr>Secundario (completo):</abbr>
                    <p>Técnica 2 Obispo Colombres</p>
                </li>
                <li>
                    <abbr>Universidad:</abbr>
                    <p>Universidad Tecnológica Nacional (UTN):</p>
                    <p>Ingenieria Electronica (abandonado) </p>
                    <p>Ingeniería en Sistemas (abandonado) </p>
                </li>
            </div>
            <div className={STLPages.liNoWrap_C}>
            <li>
                <abbr>Cursos</abbr>
                <h3>Instituto de Formación Profesional (NOA)</h3>
                <p>Asistente Paramédico</p>
                <p></p>
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