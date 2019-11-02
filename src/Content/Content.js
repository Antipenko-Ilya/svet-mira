import React from 'react';
import Card from './Card';
import { Filters } from '../Filter/Filters';

const cards = [
    {
        id: 1,
        name: 'Люстра'
    },
    {
        id: 2,
        name: 'Бра'
    },
    {
        id: 3,
        name: 'Светильник'
    },
    {
        id: 4,
        name: 'Люстра'
    },
    {
        id: 5,
        name: 'Светильник'
    },
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
    },
    {
        id: 10,
        name: 'Люстра'
    },
    {
        id: 11,
        name: 'Бра'
    },
    {
        id: 12,
        name: 'Люстра'
    }
];

export function Content({ match }) {
    console.log('>', match.params.category);
    return(
        <div>
            <Filters />
            {cards.filter(x => x.id % 10 === match.params.category % 10).map(card => <Card key={card.id} {...card} />)}
        </div>
    );
}
