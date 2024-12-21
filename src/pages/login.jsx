import { useContext } from "react";
import { AutenticacaoContext } from "../context/AutenticacaoContext";

function Login() {

    const { setLogado } = useContext(AutenticacaoContext)

    function acessar() {
        
        setLogado(true)
    }

    return (
        <>
            <form action="">
                <input type="text" />
                <input type="password" />
            </form>
            Login
            <button onClick={acessar}>Acessar</button>
        </>
    )
}

export default Login;