import React from 'react'

const LoginForm = props => {
    return (
        <div className="login-form">
            <h2>Sign in to manage your inventory!</h2>

            <form onSubmit={props.userLogin}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={props.username}
                    onChange={props.handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={props.password}
                    onChange={props.handleChange}
                />
                <button
                    type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginForm
