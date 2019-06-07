import React, { Component } from 'react'
import axios from 'axios'

export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email: '',
            role: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    registerUser = e => {
        e.preventDefault();
        const user = {
            name: this.state.name,
            password: this.state.password,
            email: this.state.email,
            role: this.state.role
        }
        axios
            .post('https://kitchen-soup-backend.herokuapp.com/api/users/register', user)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                this.props.history.push('/protectedHome')
            })
    }

    render() {
        return (
            <div className="signup-form">
                <form onSubmit={this.registerUser}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />                    <input
                        type="text"
                        name="email"
                        placeholder="Email/Username"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="role"
                        placeholder="Your Role"
                        value={this.state.role}
                        onChange={this.handleChange}
                    />
                    <button
                        type="submit">
                        Signup!
                    </button>
                </form>
            </div>
        )
    }
}

export default Signup
