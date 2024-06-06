import React, { useState, useContext } from 'react'
import { FocusContext } from "./contexts.js";

import { BiDownArrow, BiSolidCog } from "react-icons/bi";


import StlHeader from './header.module.css';


/**
 * ***>>


*******>>>>>>>>>>>>>>>> ITEMS


* ***>>
 */


function ItemLi({ children, newFocus, newObjetFocus, onClick, classnamebtn, styleli }) {
    const { setFocus, setObjetFocus } = useContext(FocusContext);

    const newAction = () => {
        if (newFocus) setFocus(newFocus);
        if (newObjetFocus) setObjetFocus(newFocus);
        if (onClick) onClick();

        if (!(onClick || newObjetFocus || newFocus)) {
            console.log('_ _header.js > Nav');
            console.log('error en la acción del elemento NAV');
        }
    }

    return (
        <li style={styleli}>
            <button
                onClick={newAction}
                className={`${StlHeader.btn} ${StlHeader.btnAppearence} ${classnamebtn}`}>
                {children}
            </button>
        </li>
    )
}

function ExtraNav({ children, newFocus = 'Main', newObjetFocus, action, extrastyle = StlHeader.Extrabtn }) {
    const { setFocus, setObjetFocus } = useContext(FocusContext);

    const newAction = () => {
        if (newFocus) setFocus(newFocus);
        if (newObjetFocus) setObjetFocus(newObjetFocus);
        if (action) action();

        if (!(action || newObjetFocus || newFocus)) {
            console.log('_ _header.js > Nav');
            console.log('error en la acción del elemento NAV');
        }
    }

    return (
        <li>
            <button
                onClick={newAction}
                className={`${extrastyle} ${StlHeader.btnAppearence}`}>
                {children}
            </button>
        </li>
    )
}

function Exp() {
    const [exp, setExp] = useState(false);

    const OnOffExp = () => {
        setExp(!exp);
    }

    return (
        <>
            {
                !exp ? <ItemLi onClick={OnOffExp}>Experiencia</ItemLi> :
                    <li onMouseLeave={() => setExp(false)}>
                        <button
                            onClick={OnOffExp} className={StlHeader.exp}> Experiencia en: </button>
                        <ul className={StlHeader.ExtraUl}>
                            <ExtraNav newObjetFocus={'programacion'}>Programacion</ExtraNav>
                            <ExtraNav newObjetFocus={'electronica'}>Técnico Electronico</ExtraNav>
                            <ExtraNav newObjetFocus={'dibujo'}>Dibujo</ExtraNav>
                            <ExtraNav newObjetFocus={'paramedic'}>Asistente Paramédico</ExtraNav>
                        </ul>
                    </li>
            }

        </>
    )
}


/**
 * ***>>
 *******>>>>>>>>>>>>>>>> PRINCIPAL
 * ***>>
 */

function Header() {
    const [MenuExpansible, setMenuExpansible] = useState(true);
    const [ConfigExpansible, setConfigExpansible] = useState(false);

    const OnOffMenuExpansible = () => {
        setMenuExpansible(!MenuExpansible);
    }
    const OnOffConfigExpansible = () => {
        setConfigExpansible(!ConfigExpansible);
    }

    return (
        <header className={`${StlHeader.header}`}>

            <button
                onClick={OnOffMenuExpansible}
                className={StlHeader.ICON}
            >
                <BiDownArrow style={{ transform: `rotate(${MenuExpansible ? 0 : 180}deg)` }} />
            </button>


            <nav>
                <ul className={`${StlHeader.ulHeader}`} >
                    {
                        MenuExpansible &&
                        <>
                            <ItemLi newFocus={'Main'} newObjetFocus={'Main'}> Inicio </ItemLi>
                            <ItemLi newFocus={'Contacto'}> Contacto </ItemLi>
                            <ItemLi newFocus={'CV'}>Curriculum Vitale</ItemLi>
                            <Exp />
                        </>
                    }
                </ul>
            </nav>

            {
                MenuExpansible &&
                <button className={StlHeader.ICON} onClick={OnOffConfigExpansible}>
                    <BiSolidCog />
                </button>
            }
        </header>
    )
}




export default Header