import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div>
                <form>
                    <input
                        placeholder="username"
                    />
                    <input
                        placeholder="password"
                    />
                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        )
    }
}

export default Login
