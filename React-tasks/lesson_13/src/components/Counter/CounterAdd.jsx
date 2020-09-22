import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const CounterAdd = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [digit, setDigit] = useState(0);

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <input type='number' value={digit} onChange={e => setDigit(e.target.valueAsNumber)} />
            <button onClick={() => onAdd({ name, digit })}>Добавить счётчик</button>
            <button><Link to='/counters'>Назад</Link></button>
        </form>
    )
}
