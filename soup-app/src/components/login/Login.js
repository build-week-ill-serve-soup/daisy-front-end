import React, { Component } from 'react'
import axios from 'axios'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
      }

    userLogin = e => {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        axios
        .post('https://kitchen-soup-backend.herokuapp.com/api/users/login', user)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            this.props.history.push('/protectedHome')
        })
    }

    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.userLogin}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
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

export default Login
