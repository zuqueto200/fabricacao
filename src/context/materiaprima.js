 import React, { createContext, useContext, useState } from "react" 
 import MP from '../materiaprima.json'

export const MateriaPrimaContextDefault = {
    materiaPrima: [],
    setMateriaPrima: undefined
}

export const MateriaPrimaContext = createContext(MateriaPrimaContextDefault)

export const MateriaPrimaProvider = (props) => {
    
    const [materiaPrima, setMateriaPrima] = useState(MP)

    return (
        <MateriaPrimaContext.Provider value={{ materiaPrima, setMateriaPrima }}>
            {props.children}
        </MateriaPrimaContext.Provider>
    )
}

export const useMateriaPrima = () => {
    const context = useContext(MateriaPrimaContext)
    const { materiaPrima, setMateriaPrima } = context
    return { materiaPrima, setMateriaPrima }
}