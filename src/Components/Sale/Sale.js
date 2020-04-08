import React from 'react';
import Card from '../Card/Card';
import './Sale.css';

const saleCard = [
    {
        "id": "1",
        "name": "Люстра",
        "image": "/products/0241e_enl.150x150.jpg",
        "article": "14 5256 008 90 01 00 22 (AM 5256/00/008)",
        "price": "114816",
        "sale": false,
        "amount": "3",
        "type": "chandelier",
        "brand": "Preciosa"
    },
    {
        "id": "2",
        "name": "Люстра",
        "image": "/products/0241e_enl.330x300.jpg",
        "article": "14 5257 012 90 01 01 35 (AM 5256/00/012)",
        "price": "123648",
        "sale": false,
        "amount": "2",
        "type": "chandelier",
        "brand": "Preciosa"
    },
    {
        "id": "3",
        "name": "Люстра",
        "image": "/products/11.300x300.jpg",
        "article": "15 0590 006 07 01 02 01 (AB 0590/00/006)",
        "price": "28376",
        "sale": false,
        "amount": "5",
        "type": "chandelier",
        "brand": "Preciosa"
    },
    {
        "id": "4",
        "name": "Люстра",
        "image": "/products/0241e_enl.330x300.jpg",
        "article": "15 0590 012 07 01 04 01 (AB 0590/00/012)",
        "price": "49606",
        "sale": false,
        "amount": "1",
        "type": "chandelier",
        "brand": "Preciosa"
    },
    {
        "id": "5",
        "name": "Люстра",
        "image": "/products/0241e_enl.330x300.jpg",
        "article": "15 0623 005 07 01 01 01 (AB 0623/00/005)",
        "price": "21233",
        "sale": false,
        "amount": "4",
        "type": "chandelier",
        "brand": "Preciosa"
    },
    {
        "id": "6",
        "name": "Люстра",
        "image": "/products/0241e_enl.330x300.jpg",
        "article": "15 0798 005 07 01 02 01 (AB 0798/00/005)",
        "price": "21917",
        "sale": false,
        "amount": "4",
        "type": "chandelier",
        "brand": "Preciosa"
    },
    {
        "id": "7",
        "name": "Люстра",
        "image": "/products/0241e_enl.330x300.jpg",
        "article": "15 0798 008 07 01 03 22 (AB 0798/00/008)",
        "price": "31310",
        "sale": false,
        "amount": "5",
        "type": "chandelier",
        "brand": "Preciosa"
    },
    {
        "id": "8",
        "name": "Люстра",
        "image": "/products/0241e_enl.330x300.jpg",
        "article": "15 0798 008 07 01 21 35 (AB 0798/01/008)",
        "price": "40018",
        "sale": false,
        "amount": "2",
        "type": "chandelier",
        "brand": "Preciosa"
    }
];

export function Sale() {
    return(
        <div id="sale" className="sale-wrap">
            <div className="sale">
                <h2 className="sale-title">Акционные товары</h2>
                <div className="sale-content">
                    { saleCard.map(card => <Card {...card} />) }
                </div>
            </div>
        </div>
    );
}