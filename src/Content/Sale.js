import React from 'react';
import Card from './Card';

const saleCard = [
    {
        id: 6,
        name: 'Бра'
    },
    {
        id: 7,
        name: 'Люстра'
    },
    {
        id: 8,
        name: 'Светильник'
    },
    {
        id: 9,
        name: 'Бра'
    }
];

export function Sale() {
    return(
        // <div>
            saleCard.map(card => <Card name={saleCard.name} />)
        // </div>
    );
}