import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/basket/actions';
import './Card.css';

export default function Card(props) {
    const dispatch = useDispatch();
    let showPupup = (event) => {}
    return(
        <div className="card">
            <Link to="/good/"><img className="card-img" src={props.image} alt="card" onClick={showPupup}></img></Link>
            <div>{props.Name}</div>
            <div className="card-description">
                <div className="card-description_left">
                    <div>{props.brand}</div>
                    <div>{props.price}</div>
                </div>
                <div className="card-description_right">
                    <div>На складе {props.amount}</div>
                    <div>{props.price}</div>
                </div>
            </div>
            <div className="button-wrap">
                <button className="card-button" onClick={() => dispatch(addToBasket(props.id))}>В корзину</button>
                <button className="card-button">Купить в 1 клик</button>
            </div>
        </div>
    )
}