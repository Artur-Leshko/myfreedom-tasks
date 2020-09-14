import React from 'react';
import { auth } from './firestore';

const CategoryContext = React.createContext();
const UserContext = React.createContext();

export const CategoryProvider = CategoryContext.Provider;

export const CategoryConsumer = CategoryContext.Consumer;

export  class UserProvider extends React.Component {
    _user = null;

    state = {
        user: null,
        isLoading: true
    }

    componentDidMount() {
        this.usersubscribe = auth.onAuthStateChanged((user) => {
            this._user = user;
            this.setState({
                user: user ? {
                    displayName: user.displayName,
                    email: user.email,
                    id: user.uid
                } : null,
                isLoading: false,
            });
        },
        (e) => console.error(e)
        );
    }

    componentWillUnmount() {
        this.usersubscribe();
    }

    login = ({login, password}) => {
        auth.signInWithEmailAndPassword(login, password);
    };

    logout = () => auth.signOut();

    register = ({login, password}) => {
        auth.createUserWithEmailAndPassword(login, password);
    };

    updateProfile = (fields) => {
        this._user.updateProfile(fields);
        this.setState({ user: {...this.state.user, ...fields } });
    };

    render() {
        if(this.state.isLoading) {
            return <div>...Грузим данные...</div>
        }

        return (
            <UserContext.Provider value={{ user: this.state.user, login: this.login, logout: this.logout, register: this.register, updateProfile: this.updateProfile }}>
                {this.props.children({ user: this.state.user, login: this.login, logout: this.logout, register: this.register, updateProfile: this.updateProfile })}
            </UserContext.Provider>
        )
    }
}

export const UserConsumer = UserContext.Consumer;
