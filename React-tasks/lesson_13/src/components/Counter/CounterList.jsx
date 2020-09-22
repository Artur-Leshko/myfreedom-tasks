import React from 'react';
import { Link } from 'react-router-dom';

export const CounterList = ({ counters, onInc, onDec }) => (
    <>
        {counters.length ?
            <ol>
                {counters.map(counter => (
                    <li key={counter.id}>
                        <p>Название привычки: {counter.name}</p>
                        <p>Счётчик: {counter.digit}</p>
                        <button onClick={() => onInc(counter.id)}>+</button>
                        <button onClick={() => onDec(counter.id)}>-</button>
                        <button><Link to={`/counters/${counter.id}`}>Изменить</Link></button>
                    </li>
                ))}
            </ol> :
            <div>Пока что счётчиков нет!</div>
        }
    </>
)
