import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { CategoryPage } from './components/categories/CategoriesPage';
import { firestore, collectionToObject } from './firestore';
import { CategoryProvider } from './context';
import './App.css';

class App extends React.Component {
    state = {
        categories: null,
        error: null,
    }

    componentDidMount() {
        try {
            firestore.collection('categories').onSnapshot(snapshot => {
                this.setState({ categories: collectionToObject(snapshot) });
            });
        } catch(e) {
            this.setState({ error: e });
        }
    }

    render() {
        if(!this.state.categories) {
            return <div>...Грузим категории ...</div>
        }

        if(this.state.error) {
            return <div>Упс, ошибка: {this.state.error.message}!</div>
        }

        return (
            <BrowserRouter>
                <CategoryProvider value={this.state.categories}>
                    <Switch>
                        <Route exact path='/'>
                            <Redirect to='/categories' />
                        </Route>
                        <Route path='/categories'>
                            <CategoryPage categories={this.state.categories} />
                        </Route>
                        <Route>
                            <div>Указан неверный путь!</div>
                        </Route>
                    </Switch>
                </CategoryProvider>
            </BrowserRouter>
        )
    }
}

export default App;
