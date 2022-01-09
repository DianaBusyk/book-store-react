import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <Link className ="link" to="/">
        <div className="logo">Книги Діснея</div>
      </Link>
      <Link className ="link" to="/cart">
        <div className="shopping-cart">
        <i class=" icon fas fa-shopping-cart"></i>
        {numItems} книг {total} грн
        </div>
      </Link>
    </header>
  );
};


export default ShopHeader;
