import React, { Component } from 'react'
import axios from 'axios'
import LoginForm from './LoginForm';

class Login extends Component {
    render() {
        return (
            <div className='login'>
                <LoginForm />
            </div>
        )
    }

}

export default Login




/*
export class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value,
          }
        });
      }

    login = e => {
        e.preventDefault();
        let creds = {
            name: e.target[0].value,
            password: e.target[1].value,
        }
        axios
            .post(
                'https://kitchen-soup-backend.herokuapp.com/api/users/login', 
                creds)

            .then(res => {
                this.setState({ token: res.data.token })
                localStorage.setItem("token", res.data.token)
                this.setState({ loggedIn: true });
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        return (
            <div className="login-form">
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
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
*/