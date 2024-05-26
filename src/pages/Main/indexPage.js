import React from 'react'

import Encabezado from './Encabezado';
import Proffesional from './Proffesional';
import Academico from './Academico';

import STLPages from '../pages.module.css';
import STLMain from './Main.module.css'

function Index() {
    return (
        <div className={`${STLMain.principal}`}>
            <article>
                <Encabezado />
            </article>
            <article>
                <div>
                    <h1 className={`${STLPages.ctr}`}>Perfil Profesional</h1>
                </div>
                <Proffesional />
            </article>

            <article>
                <Academico />
            </article>
        </div>
    )
}

export default Index