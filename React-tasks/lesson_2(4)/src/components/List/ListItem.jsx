import React from 'react';
import './ListItem.css';

export function ListItem({ moneyText, productsText, children }) {
    return (
        <li>
            <div className='money-div'>
                {moneyText}
            </div>
            <div className='products-div'>
                {productsText}
            </div>
            {children}
        </li>
    )
}
