import React, {useState, useEffect} from 'react';

function Animations() {
  return (
    <div>Animations</div>
  )
}

function EscrituraLenta({timeout, children = '', classname}) {
    const [elem, setElem] = useState(children);

    const DCQuerrySelector = ()=>{
        const tag = document.querySelector(classname || '');


    }

    useEffect(() => {
      
    
    }, [])
    
    return(
        <>
            {elem}
        </>
    )
}

function Reaparicion({children = '', timeout, classname}) {
    const [elems, setElems] = useState(children);

    useEffect(() => {
        const nElems = elems;

        setElems('');

        setTimeout(() => {
            setElems(nElems)
        }, timeout);
    
    }, [])
    
    
    return (
        <>{elems}</>
    )
}

export default Animations
export {EscrituraLenta, Reaparicion}