import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserConsumer } from '../context';

export class ProtectedRoute extends React.Component {
    render() {
        return (
            <UserConsumer>
                {({user}) => (
                    <Route path={this.props.path}>
                        {({location}) =>
                            user ? this.props.children : (<Redirect to={{pathname:'/login', state: {location} }} />)
                        }
                    </Route>
                )}
            </UserConsumer>
        )
    }
}
