import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const CounterEdit = ({ counter, onEdit, onDelete }) => {
    const [name, setName] = useState(counter?.name || '');
    const [digit, setDigit] = useState(counter?.digit || 0);

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <input type='number' value={digit} onChange={e => setDigit(e.target.valueAsNumber)} />
            <button onClick={() => onEdit({ name, digit })}>Изменить счётчик</button>
            <button onClick={onDelete}>Удалить счётчик</button>
            <button><Link to='/counters'>Назад</Link></button>
        </form>
    )
}
