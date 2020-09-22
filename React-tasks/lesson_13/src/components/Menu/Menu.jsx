import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => (
    <ul>
        <li><Link to='/counters'>Счётчики</Link></li>
        <li><Link to='/counters/add'>Добавить счётчик</Link></li>
    </ul>
);
