import React from 'react';
import {Cartitem} from './Cartitem';
import './Cart.css';

export function Cart(props) {
    return (
    <div className="cart">
        <div className="cart-title">Корзина</div>
        <div className="cart-goods">
            <div className="cart-header">
                <div className="cart-header_item">Фото</div>
                <div className="cart-header_item">Наименование</div>
                <div className="cart-header_item">Цена</div>
                <div className="cart-header_item">Количество</div>
                <div className="cart-header_item">Сумма</div>
            </div>
            <div className="cart-container">
                <div className="cart-content">
                    <div className="goods-real">
                         {/* { saleCard.map(card => <Card {...card} />) } */}
                           <div className="delivery_title g-title">Ваша корзина пуста</div>
                    </div>
                </div>
            </div>
            <div className="cart-footer">
                 <div className="cart-header_item">Итого: {}</div>
            </div>
        </div>
        <div className="cart-container">
            <div className="cart-content">
                <div className="order-registration">
                    <div className="delivery">
                        <div className="delivery_title">Способ доставки:</div>
                        <div className="delivery-block">
                            <div>
                                <div className="delivery-group">
                                    <input type="radio" className="cart-radio"></input>
                                    <img className="delivery-img" src={require('../image/cart/cart-icon-1.png')}></img>
                                    <div className="delivery-description">Самовывоз (бесплатно)</div>        
                                </div>
                                <p className="delivery-description_text">Удобный, бесплатный и быстрый способ получения заказа</p>
                                <p className="delivery-description_text">Адрес офиса: г.Москва, ул.Нижние Поля, д.31, стр.1</p>
                            </div>
                        </div>
                        
                        <div className="delivery-block">
                            <div className="delivery-group">
                                <input type="radio" className="cart-radio"></input>
                                <img className="delivery-img" src={require('../image/cart/cart-icon-2.png')}></img>
                                <div className="delivery-description"> Курьерская доставка по Москве (бесплатно)</div>
                            </div>
                        </div>
                        <div className="delivery_title">Способ оплаты:</div>
                        <div className="delivery-block"> 
                            <div>
                                <div className="delivery-group">
                                    <input type="radio" className="cart-radio"></input>
                                    <img className="delivery-img" src={require('../image/cart/cart-icon-3.png')}></img>
                                    <div className="delivery-description">Квитанция, к оплате</div> 
                                </div>
                                <p className="delivery-description_text">Вы можете распечатать квитанцию и оплатить её в любом 
        отделении банка. </p>
                            </div>
                        </div>
                    </div>
                    <div className="cart-form">
                        <div className="cart-form_title">Контактные данные:</div>
                        <div className="inputs">
                            <input className="cart-input-form" placeholder="Имя"></input>
                            <input className="cart-input-form" placeholder="Номер телефона"></input>
                            <input className="cart-input-form" placeholder="Email"></input>
                            <input className="cart-input-form" placeholder="Адрес"></input>
                            <textarea className="cart-input-textarea" placeholder="Комментарии к заказу"></textarea>
                        </div>
                    </div>   
                </div>
                <button className="cart-btn">Оформить</button>   
            </div>     
        </div>
    </div>);
}