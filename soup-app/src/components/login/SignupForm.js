import React from 'react'

const SignupForm = props => {
    return (
        <div className="signup-form">
            <h2>Sign up to get started!</h2>

            <form onSubmit={props.registerUser}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={props.name}
                    onChange={props.handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={props.password}
                    onChange={props.handleChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email/Username"
                    value={props.email}
                    onChange={props.handleChange}
                />
                <input
                    type="text"
                    name="role"
                    placeholder="Your Role"
                    value={props.role}
                    onChange={props.handleChange}
                />
                <button
                    type="submit">
                    Signup!
                </button>
            </form>
        </div>
    )
}

export default SignupForm
