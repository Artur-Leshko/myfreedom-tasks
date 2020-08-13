import React from 'react';
import './Input.css';

export function Input({ className, type, placeholder, required, children }) {
    return <input className={className} type={type} placeholder={placeholder} required={required}>
        {children}
    </input>
}
