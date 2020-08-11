import React from 'react';
import LoginForm from './../components/Content/LoginPage/login.jsx';

class LoginPage extends React.Component {
    render() {
        return (
            <LoginForm changePass={this.props.changePass} changeLogin={this.props.changeLogin} />
        )
    };
}
export default LoginPage