import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import Signup from '../login/Signup'

import CurrentInventory from '../inventory/CurrentInventory'
import Header from '../header/Header'

export class Home extends Component {
    render() {
        return (
                <div className='home-page'>
                    <div className='welcome-image'>
                        <img src="https://images.unsplash.com/photo-1505253668822-42074d58a7c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Bowls of Soup" />
                    </div>
                    <div className='home-page-text'>
                        <h2>Welcome!</h2>
                        <p> <strong>Let's Serve Soup</strong> is a simple soup kitchen management software that takes care of your managing your inventory, so that you can focus on changing lives.</p>
                        <div className='nav-links get-started'>
                            <Link to="/signup">Get Started Now!</Link>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Home
