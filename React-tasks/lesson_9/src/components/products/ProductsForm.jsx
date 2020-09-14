import React from 'react';
import { CategoryConsumer } from '../../context';
import './ProductsForm.css'

export class ProductsForm extends React.Component {
    state = {
        cost: this.props.product?.cost || '',
        description: this.props.product?.description || '',
        category: this.props.product?.category || '',
    }

    render() {
        return (
            <CategoryConsumer>
                {( categories ) => (
                    <form onSubmit={e => e.preventDefault()}>
                        <input type='number' value={this.state.cost} placeholder='Расходы' onChange={(e) => this.setState({ cost: e.target.value })}></input>
                        <textarea value={this.state.description} placeholder='На что ушли деньги' onChange={(e) => this.setState({ description: e.target.value })}></textarea>
                        <select value={categories.find(category => category.id === this.state.category)?.name || this.state.category} onChange={(e) => this.setState({ category: categories.find(category => category.name === e.target.value).id })}>
                            {(this.state.category === '') && <option selected='selected'>Выберите категорию</option>}
                            {categories ?
                                categories.map(category => (
                                    <option key={category.name} value={category.name}>{category.name}</option>
                                )) :
                                null
                            }
                        </select>
                        <button onClick={() => {
                            this.props.onSave(this.state, this.props.userId, this.props.product?.id);
                            this.props.history();
                        }}>
                            Сохранить
                        </button>
                        <button onClick={this.props.history}>
                            Назад
                        </button>
                    </form>
                )}
            </CategoryConsumer>
        )
    }
}
