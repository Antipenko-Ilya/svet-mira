import React from 'react';
import './Footer.css';

export function Footer(props) {
    return(
        <div className="footer">
            <div className="footer-wrap">
                <div className="about">
                    <h3 className="footer-title">О магазине</h3>
                    <p>Главная</p>
                    <p>Доставка и оплата</p>
                    <p>Бренды</p>
                    <p>Контакты</p>
                </div>
                <div className="catalog">
                    <h3 className="footer-title">Каталог</h3>
                    <p>Люстры</p>
                    <p>Большие люстры</p>
                    <p>Бра</p>
                    <p>Настольные лампы и Торшеры</p>
                    <p>Комплектующие</p>
                </div>
                <div className="contact">
                    <h3 className="footer-title">Контакты</h3>
                    <p>+7 (963) 776-10-21</p>
                    <p>+7 (926) 732-96-35</p>
                    <p>svetilnikvdom@yandex.ru</p>
                    <p>Пн–Сб   09:00–20:00</p>
                    <p>Вс      09:00–17:00</p>
                </div>
            </div>
            <div className="footer-map">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.854706040618!2d37.72725921573432!3d55.656736006864776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab4735bee00c9%3A0xa1cbef61b5227063!2z0YPQuy4g0J3QuNC20L3QuNC1INCf0L7Qu9GPLCAzMSwg0JzQvtGB0LrQstCwLCAxMDkzODI!5e0!3m2!1sru!2sru!4v1574618222662!5m2!1sru!2sru" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe> */}
            </div>
        </div>
    )
}