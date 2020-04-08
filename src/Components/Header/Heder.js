import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Heder.css';


export default function Header(props) {
    const count = useSelector(store => store.basket.length);
    return (
        <div className="header">
            <div className="header-information">
                <a href="/#preview"><img className="header-logo" src={require("../../image/logo.png")} alt="logo"></img></a>
                
                <div className="header-time">График работы 9:00-20:00</div>
                <div className="header-phone">+7 (926) 732-96-35</div>
                <div className="header-card">
                    <img className="card-logo" src={require("../../image/card.png")} alt="card"></img>
                    <Link to="/cart" className="card-title">Корзина {count}</Link>
                </div>
            </div>
            <div className="header-menu">
                <a className="menu-items" href="/#preview">Главная</a>
                <a className="menu-items" href="/#sale">Акции</a>
                <Link className="menu-items" to="/#delivery">Бренды</Link>
                <Link className="menu-items" to="/goods">Каталог</Link>
                <Link className="menu-items" to="/#footer">Контакты</Link>
            </div>
        </div>   
    );
}