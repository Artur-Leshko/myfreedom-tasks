import React from 'react';

export class Register extends React.Component {
    state = {
        login: '',
        password: '',
        passwordConfirmed: ''
    }

    render() {
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <input type='text' placeholder='E-mail' value={this.state.login} onChange={(e) => this.setState({ login: e.target.value })} />
                <input type='password' placeholder='Пароль' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                <input type='password' placeholder='Повторите пароль' value={this.state.passwordConfirmed} onChange={(e) => this.setState({ passwordConfirmed: e.target.value })} />
                <button onClick={() => {
                    if(this.state.password === this.state.passwordConfirmed) {
                        this.props.onRegister(this.state);
                    }
                    }}
                >Зарегистрироваться
                </button>
            </form>
        )
    }
}
