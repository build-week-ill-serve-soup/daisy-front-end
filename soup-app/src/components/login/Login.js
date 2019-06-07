import React, { Component } from 'react'
import axios from 'axios'
import LoginForm from './LoginForm';

class Login extends Component {
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
            <div>
                <LoginForm userLogin={this.userLogin}/>
            </div>
        )
    }
}

export default Login
