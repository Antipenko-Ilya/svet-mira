import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <div>
            <Link to="/#general">Главная</Link>
            <Link to="/#delivery">Доставка</Link>
            <Link to="/goods">Товары</Link>
            <Link to="/#contact">Контакты</Link>
        </div>   
    );
}