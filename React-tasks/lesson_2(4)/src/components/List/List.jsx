import React from 'react';
import './List.css';

export function List({ className, children }) {
    return (
        <ol className={className}>
            {children}
        </ol>
    )
}
