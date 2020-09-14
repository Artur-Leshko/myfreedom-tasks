import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export class Menu extends React.Component {
    render() {
        return(
            <ul className='menu'>
                <li>
                    <Link to='/welcome'>Добро пожаловать {this.props.user ? <>{this.props.user.displayName || this.props.user.email}</> : null }</Link>
                </li>
                <li>
                    <Link to='/categories'>Категории</Link>
                </li>
                <li>
                    <Link to='/account'>Аккаунт</Link>
                </li>
                <li>
                    {this.props.user ? <a href='#' onClick={(e) => { e.preventDefault(); this.props.onLogout()}}>Выйти</a> : <Link to='/login'>Войти</Link>}
                </li>
            </ul>
        )
    }
}
