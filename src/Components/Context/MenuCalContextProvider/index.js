import React, { useState } from "react";
import MenuCalContext from "../MenuCalContext";

const MenuCalContextProvider = ({children}) => {
    const [meal,setMeal] = useState('')
    const [breakfast,setBreakfast] = useState([])
    const [lunch,setLunch] = useState([])
    const [dinner,setDinner] = useState([])
    const [snacks,setSnacks] = useState([])



    return (<MenuCalContext.Provider value={{
        meal,setMeal,
        breakfast,setBreakfast,
        lunch,setLunch,
        dinner,setDinner,
        snacks,setSnacks
    }}>{children}</MenuCalContext.Provider>)
}

export default MenuCalContextProvider