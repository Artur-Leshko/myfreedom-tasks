import React from 'react';
import './NavBar.css';

export function NavBar({ className, items, initialActiveItemId }) {
    return (
        <div className={className}>
            {items.map((item) => (
                <a href="#" key={item}>{item}</a>
            ))}
        </div>
    )
}
