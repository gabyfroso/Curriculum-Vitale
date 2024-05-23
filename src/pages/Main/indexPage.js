import React from 'react'

import Encabezado from './Encabezado';
import Proffesional from './Proffesional';
import Academico from './Academico';

import STLPages from '../pages.module.css';
import STLMain from './Main.module.css'

function Index() {
    return (
        <div className={`${STLMain.principal}`}>
            <Encabezado />

            <div>
                <h1 className={`${STLPages.ctr}`}>Perfil Profesional</h1>
            </div>
            <Proffesional/>

            <Academico />
        </div>
    )
}

export default Index