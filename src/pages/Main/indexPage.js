import React from 'react'

import Encabezado from './Encabezado.jsx';
import Proffesional from './Proffesional.jsx';
import Academico from './Academico.jsx';

import STLPages from '../pages.module.css';
import STLMain from './Main.module.css'

function Index() {
    return (
        <section className={`${STLMain.principal} ${STLPages.section}`}>
            <article>
                <Encabezado />
            </article>
            <article>
                <div>
                    <h1 className={`${STLPages.ctr}`}>Perfil</h1>
                </div>
                <Proffesional />
            </article>

            <article>
                <Academico />
            </article>
        </section>
    )
}

export default Index