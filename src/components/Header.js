import React, { useState, useContext } from 'react'
import { FocusContext } from "./contexts.js";

import { BiDownArrow, BiSolidCog } from "react-icons/bi";


import StlHeader from './css/header.module.css';

function Expansible({ text = '', children }) {

    const [inFocus, setInFocus] = useState(false);

    const OnFocus = () => {
        setTimeout(() => {
            setInFocus(true)
        }, 400);
    }

    const OffFocus = () => {
        setTimeout(() => {
            setInFocus(false)
        }, 800);
    }

    return (
        <li>
            <button
                className={`${StlHeader.btn} ${StlHeader.btnExp} ${StlHeader.btnAppearence}`}
                onMouseEnter={OnFocus}
                onMouseLeave={OffFocus}>

                {
                    !inFocus ?
                        <>{text}</> :

                        <ul className={StlHeader.ExtraUl}>
                            {children}
                        </ul>
                }
            </button>
        </li>
    )
}


/**
 * ***>>


*******>>>>>>>>>>>>>>>> ITEMS


* ***>>
 */
function Exp() {
    return (
        <Expansible text='Experiencia'>
            <h3>Experiencia en:</h3>
            <ExtraNav newFocus={'expProgramacion'}>Programacion</ExtraNav>
            <ExtraNav newFocus={'expElectronica'}>Electronica</ExtraNav>
            <ExtraNav newFocus={'expDibujo'}>Dibujo</ExtraNav>
            <ExtraNav newFocus={'expParamedic'}>Asistente Paramédico</ExtraNav>
        </Expansible>
    )
}


/**
 * ***>>
 

*******>>>>>>>>>>>>>>>> NAVS


 * ***>>
 */


function Nav({ children, newFocus, action, extrastyle }) {
    const { setFocus } = useContext(FocusContext);

    const newAction = () => {
        if (newFocus) {
            setFocus(newFocus);
            return;
        }
        if (action) {
            action();
            return;
        }

        console.log('_ _header.js > Nav');
        console.log('error en la acción del elemento NAV');
    }

    return (
        <li className={extrastyle}>
            <button
                onClick={newAction}
                className={`${StlHeader.btn} ${StlHeader.btnAppearence}`}>
                {children}
            </button>
        </li>
    )
}

function ExtraNav({ children, newFocus, action, extrastyle = StlHeader.Extrabtn }) {
    const { setFocus } = useContext(FocusContext);

    const newAction = () => {
        if (newFocus) {
            setFocus(newFocus);
            return;
        }
        if (action) {
            action();
            return;
        }

        console.log('_ _header.js > ExtraNav');
        console.log('error en la acción del elemento NAV');
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


/**
 * ***>>
 *******>>>>>>>>>>>>>>>> PRINCIPAL
 * ***>>
 */

function Header() {
    const [MenuExpansible, setMenuExpansible] = useState(false);

    const OnOffMenuExpansible = () => {
        setMenuExpansible(!MenuExpansible);
    }

    return (
        <header
            className={
                `${StlHeader.header} ${!MenuExpansible ? StlHeader.disableheader : ''}`
            } >

            <Nav extrastyle={StlHeader.ICON} action={OnOffMenuExpansible}>
                <BiDownArrow />
            </Nav>

            {
                MenuExpansible &&
                <>
                    <nav>
                        <ul>
                            <Nav newFocus={'Main'}> Inicio </Nav>
                            <Nav newFocus={'Contacto'}> Contacto </Nav>
                            <Exp />
                        </ul>
                    </nav>
                    <Nav extrastyle={StlHeader.ICON}> <BiSolidCog /> </Nav>
                </>
            }
        </header>
    )
}




export default Header