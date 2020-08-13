import React from 'react';
import './DeleteButton.css';

export function DeleteButton({ onClick }) {
    return <button className='delete-button' type='button' onClick={onClick}>
        Delete
    </button>
}
