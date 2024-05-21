import React from 'react'

import IMG1 from '../../img/Imagen1.jpg'

import STLPages from '../pages.module.css';

function Encabezado() {
    const Email = 'gabyfroso@gmail.com';
    const PhoneNumber = '+5493816164351'
  
    return (
      <tr className={`${STLPages.flexwrap}`}>
        <td style={{ flexGrow: 1 }} className={`${STLPages.ctr}`}>
          <h1 className={STLPages.TextAnim}> HUGO GABRIEL FROSONI </h1>
          <h2> Programador </h2>
          <h3> Técnico Electrónico </h3>
          <h3> Asistente Paramédico </h3>
        </td>
  
        <td style={{ width: 300 }} className={STLPages.ctr}>
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
  
  function Datos() {
    const Birthday = new Date('2003-06-23');
    const DateActual = new Date();
  
    const AgeIn_milisec = 1000 * 60 * 60 * 24 * 365.25;
  
    const difIn_ms = DateActual - Birthday;
  
    let edad = Math.floor(difIn_ms / AgeIn_milisec);
  
    return (
      <tr className={`${STLPages.flexwrap}`}>
        <td style={{ flexGrow: 1 }} className={`${STLPages.ctr}`}>
          <ul>
            <li>
              <abbr> Edad: {edad} </abbr>
            </li>
            <li>
              <abbr> Estatura: 1.70 </abbr>
            </li>
          </ul>
        </td>
        <td className={STLPages.ctr} style={{ width: 240, display: 'flex', height: 200 }}>
          <img src={IMG1} alt='Perfil' />
        </td>
      </tr>
    )
  }

function Index() {
    return (
        <>
            <div>
                <table className={`${STLPages.Table_Principal} `}>
                    <tbody>
                        <Encabezado />
                    </tbody>
                </table>
            </div>

            <div>
                <h1 className={`${STLPages.ctr}`}>Datos</h1>
                <table className={`${STLPages.Table_Principal}`}>
                    <tbody>
                        <Datos />
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Index