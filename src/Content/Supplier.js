import React from 'react';
import './Supplier.css';

export function Supplier(props) {
    return(
    <div className="supplier">
        <h2 className="supplier-title">Наши поставщики</h2>
        <div className="supplier-img_wrap">
            <img className="supplier-img" src={require('../image/footer/elite-bogemia.png')} alt="supplier"></img>
            <img className="supplier-img" src={require('../image/footer/Preciosa.png')} alt="supplier2"></img>
        </div>
    </div>
    )
}