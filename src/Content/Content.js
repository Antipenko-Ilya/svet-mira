import React, {useState, useEffect} from 'react';
import qs from 'query-string';
import Card from './Card';
import { Filters } from '../Filter/Filters';
import './Content.css';

const cards = [
    {
        "id": "1",
        "name": "Люстра",
        "image": "/products/0241e_enl.330x300.jpg",
        "article": "14 5256 008 90 01 00 22 (AM 5256/00/008)",
        "price": "114816",
        "sale": false,
        "amount": "3",
        "type": "chandelier"
    },
    {
        "id": "2",
        "name": "Люстра",
        "image": "/products/0241e_enl.330x300.jpg",
        "article": "14 5257 012 90 01 01 35 (AM 5256/00/012)",
        "price": "123648",
        "sale": false,
        "amount": "2",
        "type": "chandelier"
    },
    {
        "id": "3",
        "name": "Люстра",
        "image": "/products/0241e_enl.330x300.jpg",
        "article": "15 0590 006 07 01 02 01 (AB 0590/00/006)",
        "price": "28376",
        "sale": false,
        "amount": "5",
        "type": "chandelier"
    },
    {
        "id": "4",
        "name": "Люстра",
        "image": "/products/0241e_enl.330x300.jpg",
        "article": "15 0590 012 07 01 04 01 (AB 0590/00/012)",
        "price": "49606",
        "sale": false,
        "amount": "1",
        "type": "chandelier"
    },
    {
        "id": "5",
        "name": "Люстра",
        "image": "/products/0241e_enl.330x300.jpg",
        "article": "15 0623 005 07 01 01 01 (AB 0623/00/005)",
        "price": "21233",
        "sale": false,
        "amount": "4",
        "type": "chandelier"
    },
    {
        "id": "6",
        "name": "Люстра",
        "image": "/products/0241e_enl.330x300.jpg",
        "article": "15 0798 005 07 01 02 01 (AB 0798/00/005)",
        "price": "21917",
        "sale": false,
        "amount": "4",
        "type": "chandelier"
    },
    {
        "id": "7",
        "name": "Люстра",
        "image": "/products/0241e_enl.330x300.jpg",
        "article": "15 0798 008 07 01 03 22 (AB 0798/00/008)",
        "price": "31310",
        "sale": false,
        "amount": "5",
        "type": "chandelier"
    },
    {
        "id": "8",
        "name": "Люстра",
        "image": "/products/0241e_enl.330x300.jpg",
        "article": "15 0798 008 07 01 21 35 (AB 0798/01/008)",
        "price": "40018",
        "sale": false,
        "amount": "2",
        "type": "chandelier"
    }
];


export function Content({ match }) {
    const [filters, setFilters] = useState({});
    const [cards, setCards] = useState([]);

    const { brand, type } = match.params;

    const queryParams = {
      ...filters,
      brand,
      type
    };
    const queryString = `?${qs.stringify(queryParams)}`;
    // ?priceFrom=30000&priceTo=40000&brand=Preciosa

    async function loadData(filters) {
        const data = await fetch(`http://5.101.51.45/goods`).then(r => r.json());
        setCards(data);
    }

    useEffect(() => {
        loadData(filters);
    }, [filters, match]);

    return(
        <div className="content-wrap">
            <Filters brand={brand} type={type} />
            <div className="goods">
                {cards.map(card => <Card key={card.id} {...card} />)}
            </div>
        </div>
    );
}
