import React from 'react';
import { Link } from 'react-router-dom';

export function Filters(){
    return(
      <div>
        <Link to="/goods/123">Люстры</Link>
        <Link to="/goods/456">Бра</Link>
        <Link to="/goods/789">Светильники</Link>
      </div>
    )
}