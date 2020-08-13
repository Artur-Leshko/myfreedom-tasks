import React from 'react';
import './AddButton.css';

export function AddButton({ className, type, children }) {
    return <button className={className} type={type}>
        {children}
    </button>
}
