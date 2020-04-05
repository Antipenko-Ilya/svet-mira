import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Slider } from 'antd';
import './Filter.css';

export function Filters({ brand, type }){

    return(
      <div className="filter-panel">
        <div className="filter-type">
          <Link className="filter-type_item" to={`/goods/${brand || 'all'}/chandelier`}>Люстры</Link>
          <Link className="filter-type_item" to={`/goods/${brand || 'all'}/Sconce`}>Бра</Link>
          <Link className="filter-type_item" to={`/goods/${brand || 'all'}/lamp`}>Настольные лампы и Торшеры</Link>
          <Link className="filter-type_item" to={`/goods/${brand || 'all'}/components`}>Комплектующие</Link>
        </div>
        <div className="filter-price">
          <p className="filter-price_title">Цена</p>
          <div className="filter-price_wrap-input">
            <input className="filter-price_input-num" type="number"></input>
            <input className="filter-price_input-num" type="number"></input>
          </div>
          <Slider
            range
            step={10}
            className="filter-price_input"
            defaultValue={[20, 50]}
          />
        </div>
        <div className="filter-brand">
          <Link className="filter-type_item" to={`/goods/all/${type || ''}`}>Все</Link>
          <Link className="filter-type_item" to={`/goods/preciosa/${type || ''}`}>Preciosa</Link>
          <Link className="filter-type_item" to={`/goods/elite-Bohemia/${type || ''}`}>Elite Bohemia</Link>
        </div>
      </div>
    )
}
