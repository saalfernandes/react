import { useContext } from "react"
import { CarrinhoContext } from "../pages/painel"

function Produto ({ titulo, img, valor }) {
    const { listaCarrinho, setListaCarrinho } = useContext(CarrinhoContext)

    function adicionarNoCarrinho() {
        const produto = {
            titulo,
            img,
            valor,
            quantidade: 1
        }
        const lista = listaCarrinho;
        const index = lista.findIndex(item => item.titulo === titulo);
        if(index >= 0) {
            lista[index].quantidade++;
            setListaCarrinho([...lista]);
        } else {
            lista.push(produto);
            setListaCarrinho([...lista]);
        }
    }

    return (
        <>
            <h4>{titulo}</h4>
            <img src={img} alt="" />
            <p>R$ {valor.toFixed(2)}</p>
            <button onClick={adicionarNoCarrinho} className="btn btn-primary btn-sm">
                Adicionar ao Carrinho
            </button>
        </>
    )
}

export default Produto