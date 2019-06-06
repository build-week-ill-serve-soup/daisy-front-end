import React, { Component } from 'react'

export class Signup extends Component {
    render() {
        return (
            < div className="signup-form" >
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        type="role"
                        placeholder="Your Role"
                    />
                    <button
                        type="submit">
                        Sign Up
                    </button>
                </form>
            </div >
        )
    }
}

export default Signup
