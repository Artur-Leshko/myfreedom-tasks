import React from 'react';
import { firestore } from '../../firestore';
import { Link, Route, Switch } from 'react-router-dom';
import { CategoryiesForm } from './CategoriesForm';
import { ProductsPage } from '../products/ProductsPage';
import { collectionToObject } from '../../firestore';
import { CategoryProvider } from '../../context';

function addCategory(obj, userId) {
    firestore.collection('/categories').add({ ...obj, userId: userId });
}

function updateCategory(fields, userId, categoryId) {
    firestore.collection('/categories').doc(categoryId).update(fields);
}

function deleteCategory(categoryId) {
    firestore.collection('/categories').doc(categoryId).delete();
    firestore.collection('/bookkeeping').where('category', '==', categoryId).get().then(collectionToObject).then(docs => {
        docs.map(doc => firestore.collection('/bookkeeping').doc(doc.id).delete());
    });
}

export class CategoryPage extends React.Component {
    state = {
        categories: null,
        error: null,
        isLoading: true
    }

    componentDidMount() {
        try {
            this.subscribe = firestore.collection('categories').where('userId', '==', this.props.userId).onSnapshot(snapshot => {
                this.setState({ categories: collectionToObject(snapshot) });
            });
        } catch(e) {
            this.setState({ error: e });
        }finally {
            this.setState({ isLoading: false });
        }
    }

    componentWillUnmount() {
        this.subscribe();
    }

    render() {
        if(this.state.isLoading) {
            return <div>...Грузим категории ...</div>
        }

        if(this.state.error) {
            return <div>Упс, ошибка: {this.state.error.message}!</div>
        }

        return (
            <CategoryProvider value={this.state.categories}>
                <Switch>
                    <Route exact path='/categories'>
                        <Link to='/categories/add'>
                            <button>
                                Добавить категорию
                            </button>
                        </Link>
                        {this.state.categories ?
                            <ol>
                                {this.state.categories.map(category => (
                                    <li key={category.id}>
                                        <Link to={`/categories/${category.id}/expenses`}>{category.name}</Link>
                                        <Link to={`/categories/${category.id}`}>
                                            <button>Изменить</button>
                                        </Link>
                                        <button onClick={() => deleteCategory(category.id)}>
                                            Удалить
                                        </button>
                                    </li>
                                ))}
                            </ol> :
                            <div>Категорий не существует :(</div>
                        }
                    </Route>
                    <Route path='/categories/:categoryId/expenses'>
                        {({ history, match: { params: { categoryId } } }) => (
                            <ProductsPage category={this.state.categories?.find(category => category.id === categoryId)} history={history} userId={this.props.userId} />
                        )}
                    </Route>
                    <Route path='/categories/add'>
                        {({history}) => (
                            <CategoryiesForm history={history} onSave={addCategory} userId={this.props.userId} />
                        )}
                    </Route>
                    <Route path='/categories/:categoryId'>
                        {({history, match: { params: { categoryId } }}) => (
                            <CategoryiesForm history={history} onSave={updateCategory} category={this.state.categories?.find(category => category.id === categoryId)}/>
                        )}
                    </Route>
                </Switch>
            </CategoryProvider>
        )
    }
}
