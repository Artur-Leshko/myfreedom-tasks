import React from 'react';

export class CategoryiesForm extends React.Component {
    state = {
        name: this.props.category?.name || '',
    }

    render() {
        return (
            <form onSubmit={e => e.preventDefault()}>
                <input type='text' value={this.state.name} placeholder='Имя категории' onChange={(e) => this.setState({ name: e.target.value })}></input>
                <button onClick={() => {
                    this.props.onSave(this.state, this.props.userId, this.props.category?.id);
                    this.props.history.push('/categories');
                }}>
                    Сохранить
                </button>
                <button onClick={() => this.props.history.push('/categories')}>
                    Назад
                </button>
            </form>
        )
    }
}
