import { useContext } from "react"
import { CarrinhoContext } from "../pages/painel"

function CarrinhoCompras () {
    const { listaCarrinho, setListaCarrinho } = useContext(CarrinhoContext)

    const initialValue = 0;
    const sumWithInitial = listaCarrinho.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantidade,
        initialValue,
    );
    return (
        <>
            <p>{sumWithInitial} Carrinhos de Compras</p>
            <a href="#" onClick={() => setListaCarrinho([])}>Esvaziar Carrinho</a>
        </>
    )
}

export default CarrinhoCompras