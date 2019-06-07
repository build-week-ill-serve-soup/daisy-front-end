import React, { Component } from 'react'
import axios from 'axios'
import SignupForm from './SignupForm';

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
            <div>
                <SignupForm registerUser={this.registerUser} />
            </div>
        )
    }
}

export default Signup
