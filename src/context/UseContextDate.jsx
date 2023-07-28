import { useState } from "react";
import DatesContext from "./createContext";

const UseContextDate = ({ children }) => {
    const [fechainicial, setFechainicial] = useState('2010/01/01')
    const [fechafinal, setFechafinal] = useState('2010/07/19')

    return (
        <DatesContext.Provider
            value={{
                fechainicial,
                fechafinal,
                setFechainicial,
                setFechafinal
            }}
        >
            {children}
        </DatesContext.Provider>
    )
}

export default UseContextDate