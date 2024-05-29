import React from 'react'

import JSONPrincipal from './JSONPrincipal.json';

import Encabezado from './Encabezado'

import STLPages from '../pages.module.css';
import STLMain from './Main.module.css'

function NItems({ Item = { title: '', items: [] }, titleI = '' }) {
    if (Item.title === 'style') {
        const MiniItems = Item.items.toString().replace(',', ' ');

        setTimeout(() => {
            const elemForStyle = document.getElementById(titleI);

            if (elemForStyle) {
                elemForStyle.setAttribute('att', MiniItems);
            }
            else {
                console.error('no se encontró elemForStyle \n indexPage(principal) -- NItems');
            }

        }, 200);



        return (
            <>
            </>
        )
    }

    return (
        <li>
            <h3> {Item.title ?? 'TitleErr'} </h3>
            {
                Array.isArray(Item.items) &&
                Item.items.map((elem, i) => i === 0 ?
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

                    const titleI = `${Elemento.replace(/\s+/g, '')}`;

                    return (
                        <div key={`${titleI}${i}` || i}>
                            <h2> {Elemento} </h2>
                            <ul id={titleI}>
                                {
                                    Array.isArray(Arr) &&
                                    Arr.map((MiniItem, i_mini) =>
                                        <NItems
                                            Item={MiniItem}
                                            titleI={titleI}
                                            key={i_mini}/>)
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
        <section>
            <article>
                <Encabezado />
            </article>

            {
                Object.entries(JSONPrincipal).flatMap(([Title, arr], i) => {
                    return (
                        <article key={i}>
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