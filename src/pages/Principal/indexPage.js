import React from 'react'

import JSONPrincipal from './JSONPrincipal.json';

import Encabezado from './Encabezado'

import STLPages from '../pages.module.css';
import STLMain from './Main.module.css'

function NItems({ MiniItem = { title: '', items: [] } }) {

    return (
        <li>
            <h3> {MiniItem.title ?? 'TitleErr'} </h3>
            {
                Array.isArray(MiniItem.items) &&
                MiniItem.items.map((elem, i) => i === 0 ?
                    <abbr key={i}>{elem}</abbr> :
                    <p key={i}> {elem} </p>)
            }
        </li>
    )
}

function MultyArrs({ Arr = { '': [] } }) {
    return (
        <>
            {
                Object.entries(Arr).map(([Elemento, Arr], i) => {
                    return (
                        <div key={i}>
                            <h2> {Elemento} </h2>
                            <ul>
                                {
                                    Array.isArray(Arr) &&
                                    Arr.map((MiniItem, i_mini) => <NItems MiniItem={MiniItem} key={i_mini} />)
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </>
    )
}

function indexPage() {
    return (
        <section className={`${STLMain.Section}`}>
            <article>
                <Encabezado/>
            </article>

            {
                Object.entries(JSONPrincipal).flatMap(([Title, arr], i) => {
                    return (
                        <article key={i} className={`${Title === 'Educación'? STLMain.abbrPriori : ''}`}>
                            <h1> {Title} </h1>
                            {
                                Array.isArray(arr) &&
                                arr.map((minElem, iArr) => (<MultyArrs key={iArr} Arr={minElem} />))
                            }
    
                        </article>
                    )
                })
            }
        </section>
    )
}

export default indexPage