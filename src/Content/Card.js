import React from 'react';

export default function Card(props) {
    return(
        <div>
            <div>Карточка товара</div>
            <div>{props.name}</div>
            <button>В корзину</button>
        </div>
    )
}