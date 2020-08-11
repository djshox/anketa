import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router'
import { connect } from 'react-redux';
import './login.css'
import { signInThunk } from "localRedux/authReducer"
import LoginPresentation from './loginPresentation';

class loginpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                pass: '',
                username: '',
            },
            rules: {
                pass: [{ required: true, message: 'Please input Activity name', trigger: 'change' }],
                username: [{ required: true, message: 'Please input the login ', trigger: 'change' }],
            },
        };
    }



    onFinish = () => {
        this.props.signInThunk(this.state.form.username, this.state.form.pass, true)
        // if (this.props.isAuth) {
        //     this.props.history.push('/home')
        // }

        // else {
        //     this.refs.form.validate((valid) => {
        //         return false;
        //     });
        // }
    };

    onChange = (key, value) => {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    };

    render() {
        if (this.props.isAuth) {
            return (<Redirect to={'home'} />)
        }
        return (
            < LoginPresentation {...this.state} onFinish={this.onFinish} onChange={this.onChange} />
        )
    };
}

const mapStateToProps = ({ Auth }) => ({
    isAuth: Auth.isAuth
})

loginpage = withRouter(loginpage);
export default connect(mapStateToProps, { signInThunk })(loginpage)