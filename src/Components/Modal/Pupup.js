import React from 'react';
import './Pupup.css';

const pupUpItem = {
    "id": "7",
    "name": "Люстра подвесная Preciosa BB",
    "image": "/products/0241e_enl.330x300.jpg",
    "article": "15 0798 008 07 01 03 22 (AB 0798/00/008)",
    "price": "31310",
    "sale": false,
    "amount": "5",
    "height": "480",
    "diameter": "500",
    "cap_type": "E14",
    "amount_of_laps": "6",
    "lamp_power": "40",
    "lighting_area": "12",
    "material": "Латунь",
    "color": "Золото",
    "type": "chandelier",
    "brand": "Preciosa"
};

export function Pupup() {
    return (
        <div className="pupup-wrap">
            <div className="pupup"> 
                <h2 className="pupup-title">{pupUpItem.name}</h2>
                <div className="pupup-information">
                    <img className="pupup-img" src={pupUpItem.image}></img>
                    <div className="pupup-description">
                        <p className="pupup-description_text">Артикль: {pupUpItem.article}</p>
                        <p className="pupup-description_text">Высота, мм: {pupUpItem.height}</p>
                        <p className="pupup-description_text">Диаметр, мм: {pupUpItem.diameter}</p>
                        <p className="pupup-description_text">Тип цоколя : {pupUpItem.cap_type}</p>
                        <p className="pupup-description_text">Количество ламп: {pupUpItem.amount_of_laps}</p>
                        <p className="pupup-description_text">Площадь освещения, M2: {pupUpItem.lamp_power}</p>
                        <p className="pupup-description_text">Мощность лампы, Вт: {pupUpItem.lighting_area}</p>
                        <p className="pupup-description_text">Материал: {pupUpItem.material}</p>
                        <p className="pupup-description_text">Цвет: {pupUpItem.color}</p>
                    </div>
                    <div className="pupup-buy">
                        <p className="pupup-price">Цена: {pupUpItem.price}</p>
                        <p className="pupup-amount">Количество: {pupUpItem.amount}</p>
                        <button className="pupup-btn">Купить</button>
                    </div>
                </div>
                <div className="pupup-goods">
                    <h4 className="pupup-goods_title">С этим товаром покупают:</h4>
                    <div className="pupup-goods_items">
                        <div className="pupup-goods_item">
                            <img className="pupup-goods_item-img"></img>
                            <p className="pupup-goods_item-text"></p>
                        </div>
                        <div className="pupup-goods_item">
                            <img className="pupup-goods_item-img" ></img>
                            <p className="pupup-goods_item-text"></p>
                        </div>
                        <div className="pupup-goods_item">
                            <img className="pupup-goods_item-img"></img>
                            <p className="pupup-goods_item-text"></p>
                        </div>
                        <div className="pupup-goods_item">
                            <img className="pupup-goods_item-img"></img>
                            <p className="pupup-goods_item-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}