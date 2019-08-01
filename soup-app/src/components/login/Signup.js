import React, { Component } from 'react'
import axios from 'axios'
import SignupForm from './SignupForm';

class Signup extends Component {
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
        console.log("register user");
        const user = {
            name: this.state.name,
            password: this.state.password,
            email: this.state.email,
            role: this.state.role
        }
        axios
            .post('https://kitchen-soup-backend.herokuapp.com/api/users/register', user)
            .then(res => {
                console.log(res.data);
                console.log(res.status);
                console.log(res.statusText);
                console.log(res.headers);
                console.log(res.config);
                localStorage.setItem('token', res.data.token)
                this.props.history.push('/protectedHome')
            })
            .catch((error) => {
                // Error
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
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
