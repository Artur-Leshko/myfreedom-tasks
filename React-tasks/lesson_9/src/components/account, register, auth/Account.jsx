import React from 'react';

export class Account extends React.Component {
    state = {
        displayName: this.props.user.displayName || '',
    }

    render() {
        return (
            <>
                <div>
                    <div>Ваше имя: {this.props.user.displayName}</div>
                    <div>Ваш e-mail: {this.props.user.email}</div>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder='Имя пользователя' value={this.state.displayName} onChange={(e) => this.setState({ displayName: e.target.value })}/>
                    <button onClick={() => this.props.onSave({ displayName: this.state.displayName })}>Сохранить</button>
                </form>
            </>
        )
    }
}
