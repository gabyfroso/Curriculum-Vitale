import React, {createContext, useState} from 'react';

const UserContext = createContext();
const FocusContext = createContext();

const UserProvider = ({children}) => {

    return (
        <UserContext.Provider 
        value={{}}
        >
            {children}
        </UserContext.Provider>
    )
}

const FocusProvider = ({children}) => {
    const [Focus, setFocus] = useState('Main');
    const [size, setSize] = useState(2);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    const changeTheme = ()=>{
        const newTheme =  theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    const AllSize = ()=>{
        const ASize = {
            4: 
            {

            },
            3: 
            {

            },
            2: 
            {

            },
            1: 
            {

            },
        }

        return ASize[size];
    }

    return (
        <FocusContext.Provider value={{
            changeTheme,
            Focus, setFocus,
            AllSize, setSize
        }}>
            {children}
        </FocusContext.Provider>
    )
}

export {
    UserContext , UserProvider,
    FocusContext, FocusProvider
}