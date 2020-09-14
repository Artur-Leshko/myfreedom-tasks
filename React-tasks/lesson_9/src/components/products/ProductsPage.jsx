import React from 'react';
import { firestore, collectionToObject } from '../../firestore';
import { ProductsForm } from './ProductsForm';
import { Link, Route, Switch } from 'react-router-dom';
import './ProductsPage.css';

function addProduct(obj, userId) {
    firestore.collection('/bookkeeping').add({ ...obj, userId: userId });
}

function updateProduct(fields, userId, productId) {
    firestore.collection('/bookkeeping').doc(productId).update(fields);
}

function deleteProduct(productId) {
    firestore.collection('/bookkeeping').doc(productId).delete();
}

export class ProductsPage extends React.Component {
    state = {
        products: null,
        error: null,
        isLoading: true
    }

    componentDidMount() {
        try {
            this.subscribe = firestore.collection('/bookkeeping').where('category', '==', this.props.category.id).where('userId', '==', this.props.userId).onSnapshot(snapshot => {
                this.setState({ products: collectionToObject(snapshot) });
            });
        } catch(e) {
            this.setState({ error: e });
        } finally {
            this.setState({ isLoading: false });
        }
    }

    componentWillUnmount() {
        this.subscribe();
    }

    render() {
        if(this.state.isLoading) {
            return <div>...Грузим расходы...</div>
        }

        if(this.state.error) {
            return <div>Упс, ошибка: {this.state.error.message}</div>
        }

        return (
            <>
                <Route exact path={`/categories/${this.props.category.id}/expenses`}>
                    <h2>Имя категории: {this.props.category.name}</h2>
                    <Link to={`/categories/${this.props.category.id}/expenses/add`}>
                        <button>
                            Добавить расход
                        </button>
                    </Link>
                    <button onClick={() => this.props.history.push('/categories')}>Назад</button>
                    {this.state.products ?
                        <ol>
                            {this.state.products.map(product => (
                                <li key={product.id}>
                                    <p>Расходы: {product.cost} рублей!</p>
                                    <p>На что ушли деньги: {product.description}</p>
                                    <Link to={`/categories/${this.props.category.id}/expenses/${product.id}`}>
                                        <button>
                                            Изменить
                                        </button>
                                    </Link>
                                    <button onClick={() => deleteProduct(product.id)}>
                                        Удалить
                                    </button>
                                </li>
                            ))}
                        </ol> :
                        <div>Расходов нет. Ура!</div>
                    }
                </Route>

                <Switch>
                    <Route path={`/categories/${this.props.category.id}/expenses/add`}>
                        {({history}) => (
                            <ProductsForm history={() => history.push(`/categories/${this.props.category.id}/expenses`)} onSave={addProduct} userId={this.props.userId} />
                        )}
                    </Route>
                    <Route path={`/categories/${this.props.category.id}/expenses/:productId`}>
                        {({ history, match: { params: { productId } } }) => (
                            <ProductsForm history={() => history.push(`/categories/${this.props.category.id}/expenses`)} onSave={updateProduct} product={this.state.products?.find(product => product.id === productId)} />
                        )}
                    </Route>
                </Switch>
            </>
        )
    }
}
