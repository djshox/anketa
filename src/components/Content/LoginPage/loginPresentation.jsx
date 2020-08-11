import { Form, Input, Button } from 'element-react';
import React, { Component } from 'react';

class loginPresentation extends Component {
    handleSubmit = (e) => {
        this.refs.form.validate((valid) => {
            if (valid) {
                this.props.onFinish()
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    };

    handleReset = (e) => {
        e.preventDefault();
        this.refs.form.resetFields();
        this.setState({
            form: Object.assign({}, this.props.form, { pass: '', username: '' })
        });

    }

    render() {
        return (
            <div className="mTop row mx-0" >
                <div className="col-4 offset-4">
                    <Form ref="form" model={this.props.form} rules={this.props.rules} labelWidth="100" className="en-US">
                        <Form.Item label="username" prop="username" >
                            <Input value={this.props.form.username} onChange={this.props.onChange.bind(this, 'username')} type="text" />
                        </Form.Item>
                        <Form.Item label="Password" prop="pass" onChange={this.props.onChange}>
                            <Input type="password" value={this.props.form.pass} onChange={this.props.onChange.bind(this, 'pass')} autoComplete="off" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.handleSubmit}>Submit</Button>
                            <Button onClick={this.handleReset}>Reset</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div >
        )
    }

}

export default loginPresentation;