import React from 'react'

import STLAside from './aside.module.css';

function Aside() {
  return (
    <aside className={STLAside.aside}>
      <ul>
        <li className='pg0' />
        <li className='pg1' />
        <li className='pg2' />
      </ul>
    </aside>
  )
}

export default Aside