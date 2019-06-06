import React, { Component } from 'react'

export class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onSubmit = e => {
        e.preventDefault();
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { username, password } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h2>Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button
                        type="submit">
                        Login
                    </button>
                </form>
            </div>
        )
    }
}

export default LoginForm
