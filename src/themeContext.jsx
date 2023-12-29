import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme=()=> useContext(ThemeContext)

const ThemeProvider = ({children}) =>{
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toogleTheme = () => {
        let stateData = !isDarkTheme
        setIsDarkTheme(stateData)
        localStorage.setItem('dark', stateData)
    }

    useEffect(()=>{
        let themeData = localStorage.getItem('dark')
        if(themeData === 'false'){
            themeData = false
        }else {
            themeData = true
        }
        setIsDarkTheme(themeData)
    },[])

    return(
        <ThemeContext.Provider value={{isDarkTheme, toogleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeProvider