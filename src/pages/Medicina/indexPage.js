import React from 'react'

import AuxParam from './AsistParamedico';
import Veterinaria from './Veterinaria';

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
    <div>
      {SourceApp}
    </div>
  )
}

export default Index