import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { CategoryPage } from './components/categories/CategoriesPage';
import { UserProvider } from './context';
import { Menu } from './components/menu/Menu';
import { Account } from './components/account, register, auth/Account';
import { Login } from './components/account, register, auth/Login';
import { Register } from './components/account, register, auth/Register';
import { ProtectedRoute } from './components/ProtectedRoute';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <UserProvider>
                    {({ user, login, logout, register, updateProfile }) => (
                        <>
                            <Menu user={user} onLogout={logout}/>
                            <Switch>
                                <Route exact path='/'>
                                    <Redirect to='/welcome' />
                                </Route>
                                <Route path='/welcome'>
                                    <div className='welcome'>
                                        <h2>Добро пожаловать в приложение ведения расходов!</h2>
                                        {
                                            user ?
                                            <p>{user.displayName || user.email}, вы вошли! Для начала работы перейдите на вкладку "Категории"</p>:
                                            <p>Для того чтобы начать работу, выполните вход в свой аккаунт!</p>
                                        }
                                    </div>
                                </Route>
                                <ProtectedRoute path='/categories'>
                                    <CategoryPage userId={user?.id || ''} />
                                </ProtectedRoute>
                                <ProtectedRoute path='/account'>
                                    <Account user={user} onSave={updateProfile} />
                                </ProtectedRoute>
                                <Route path='/login'>
                                    {({ location, history }) => (
                                        <Login onLogin={async (user) => {
                                            await login(user);
                                            if (location.state?.location) {
                                                history.replace(location.state.location.pathname);
                                            } else {
                                                history.replace("/categories");
                                            }
                                        }}
                                        />
                                    )}
                                </Route>
                                <Route path='/register'>
                                    {({history}) => (
                                        <Register onRegister={async ({login, password}) => {
                                            await register({login, password});
                                            history.push('/welcome');
                                        }}
                                        />
                                    )}
                                </Route>
                                <Route>
                                    <div>Указан неверный путь!</div>
                                </Route>
                            </Switch>
                        </>
                    )}
                </UserProvider>
            </BrowserRouter>
        )
    }
}

export default App;
