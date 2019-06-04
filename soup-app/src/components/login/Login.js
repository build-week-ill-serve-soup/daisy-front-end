import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="login-form">
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        placeholder="Password"
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