import { createContext, useState } from "react";

export const AutenticacaoContext = createContext();

function AutenticacaoProvider({ children }) {
    const [logado, setLogado] = useState(false)
    return (
        <>
            <AutenticacaoContext.Provider value={{ logado, setLogado }}>
                {children}
            </AutenticacaoContext.Provider>
        </>
    )
}

export default AutenticacaoProvider