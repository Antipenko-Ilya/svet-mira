import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Heder.css';


export default function Header(props) {
    const count = useSelector(store => store.basket.length);
    return (
        <div className="header">
            <div className="header-information">
                <img className="header-logo" src={require("../../image/logo.png")} alt="logo"></img>
                <div className="header-time">График работы 9:00-20:00</div>
                <div className="header-phone">+7 (926) 732-96-35</div>
                <div className="header-card">
                    <img className="card-logo" src={require("../../image/card.png")} alt="card"></img>
                    <Link to="/cart" className="card-title">Корзина {count}</Link>
                </div>
            </div>
            <div className="header-menu">
                <Link className="menu-items" to="/#preview">Главная</Link>
                <Link className="menu-items" to="/#sale">Акции</Link>
                <Link className="menu-items" to="/#delivery">Доставка</Link>
                <Link className="menu-items" to="/goods">Каталог</Link>
                <Link className="menu-items" to="/#footer">Контакты</Link>
            </div>
        </div>   
    );
}