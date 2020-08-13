import React from 'react';
import './Form.css';

export function Form({ className, onSubmit, children }) {
    return <form className={className} onSubmit={onSubmit}>
        {children}
    </form>
}
