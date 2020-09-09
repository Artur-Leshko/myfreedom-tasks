import React from 'react';
import { firestore } from '../../firestore';
import { Link, Route, Switch } from 'react-router-dom';
import { CategoryiesForm } from './CategoriesForm';
import { ProductsPage } from '../products/ProductsPage';

function addCategory(obj) {
    firestore.collection('/categories').add(obj);
}

function updateCategory(fields, categoryId) {
    firestore.collection('/categories').doc(categoryId).update(fields);
}

function deleteCategory(categoryId) {
    firestore.collection('/categories').doc(categoryId).delete();
}

export class CategoryPage extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/categories'>
                    <Link to='/categories/add'>
                        <button>
                            Добавить категорию
                        </button>
                    </Link>
                    {this.props.categories ?
                        <ol>
                            {this.props.categories.map(category => (
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
                        <ProductsPage category={this.props.categories.find(category => category.id === categoryId)} history={history} />
                    )}
                </Route>
                <Route path='/categories/add'>
                    {({history}) => (
                        <CategoryiesForm history={history} onSave={addCategory} />
                    )}
                </Route>
                <Route path='/categories/:categoryId'>
                    {({history, match: { params: { categoryId } }}) => (
                        <CategoryiesForm history={history} onSave={updateCategory} category={this.props.categories.find(category => category.id === categoryId)}/>
                    )}
                </Route>
            </Switch>
        )
    }
}
