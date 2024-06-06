import React from 'react'

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";




import IMG1 from '../../img/PhotoCV-300x300.png'

import STLMain from './Main.module.css';

function Datos() {
  const Email = 'gabyfroso@gmail.com';
  const PhoneNumber = '5493816164351'

  const Data = () => {
    return (
      <ul className={STLMain.UlData}>
        <li>
          <a href='https://github.com/gabyfroso'>
            <FaGithub />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/gabyfroso'>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href={`mailto:${Email}`}>
            <TfiEmail />
          </a>
        </li>
        <li>
          <a href={`https://wa.me/${PhoneNumber}`}>
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    )
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
      <div className={`ctr ${STLMain.photoCV}`}>
        <img src={IMG1} alt='Perfil' />
      </div>
      <Data />
    </div>
  )
}

function Index() {
  return (
    <>
      <div>
        <h1 className={`ctr`}>Hugo Gabriel Frosoni</h1>
        <Datos />
      </div>
    </>
  )
}

export default Index