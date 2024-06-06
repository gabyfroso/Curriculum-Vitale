import React from 'react'

import AuxParam from './AsistParamedico';
import Veterinaria from './Veterinaria';

import STLMain from './Main.module.css'

function Err() {
  return (
    <div>
      <h2>Error inesperado</h2>

    </div>
  )
}

function Index( {Focus}) {

  const Source = {
    expParamedic: <AuxParam />,
    expVeterinaria: <Veterinaria />,
    Err: <Err/>
  }

  const SourceApp = Source[Focus || 'Err'];

  return (
    <section>
      <h1>Paramedico</h1>
      <article>
      
      </article>
    </section>
  )
}

export default Index