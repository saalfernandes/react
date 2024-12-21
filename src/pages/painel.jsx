import { createContext, useContext, useState } from "react";
import { AutenticacaoContext } from "../context/AutenticacaoContext";
import CarrinhoCompras from "../components/CarrinhoCompras";
import Produto from "../components/produto";


export const CarrinhoContext = createContext();

function Painel() {
    const[listaCarrinho, setListaCarrinho] = useState([]);
    const { setLogado } = useContext(AutenticacaoContext)

    return (
        <CarrinhoContext.Provider value={{ listaCarrinho, setListaCarrinho }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        Painel -  <a href="" onClick={() => setLogado(false)}>Sair</a>
                    </div>
                    <div className="col-md-4">
                        <CarrinhoCompras />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <Produto titulo="Mouse USB" img={null} valor={29.99} />
                    </div>
                    <div className="col-md-3">
                        <Produto titulo="Teclado USB" img={null} valor={59.99} />
                    </div>
                    <div className="col-md-3">
                        <Produto titulo="Monitor 34p" img={null} valor={2359.99} />
                    </div>
                    <div className="col-md-3">
                        <Produto titulo="PC Gamer" img={null} valor={4359.99} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Quantidade</th>
                                    <th>Valor Unit</th>
                                    <th>SubTotal</th>
                                    <th>Remover</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaCarrinho.map((item, index) => (
                                    <tr key={index}>
                                        <td><img src={item.img} alt={item.titulo} width="50" /></td>
                                        <td>{item.quantidade}</td>
                                        <td>{item.valor}</td>
                                        <td>{(item.quantidade *   item.valor).toFixed(2)}</td>
                                        <td><button onClick={() => setListaCarrinho(listaCarrinho.filter((item2) => item2.id!== item.id))}>Remover</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            
            </div>
            
        </CarrinhoContext.Provider>
    ) 
}

export default Painel;