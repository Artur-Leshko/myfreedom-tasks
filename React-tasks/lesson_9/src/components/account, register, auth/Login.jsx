import React from 'react';
import { Link } from 'react-router-dom';

export class Login extends React.Component {
    state = {
        login: '',
        password: ''
    }

    render() {''
        return (
            <>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type='text' placeholder='E-mail' value={this.state.login} onChange={(e) => this.setState({ login: e.target.value })} />
                    <input type='password' placeholder='Пароль' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                    <button onClick={() => this.props.onLogin(this.state)}>Войти</button>
                    <Link to="/register">
                        <button>Регистрация</button>
                    </Link>
                </form>
            </>
        )
    }
}
