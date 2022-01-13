import React from "react";
import products from "../data/products";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    // eslint-disable-next-line no-unused-vars
    function getProdutoListItem(){
        return products.map(produtos => {
            return <li key={products.id}>{produtos.id} - {produtos.nome} - R$ {produtos.preco}</li>
        })
    }

    <div>
        <h2>Repetição</h2>
        <ul>
            {getProdutoListItem()}
        </ul>

    </div>
}