import React, { Component } from 'react'
import CurrentInventory from '../inventory/CurrentInventory'
import Header from '../header/Header'

export class Home extends Component {
    render() {
        return (
            <div className='home-page'>
                <div className='home-page-header'>
                    <Header />
                </div>
                <div className='current-inventory'>
                    <CurrentInventory />
                </div>
            </div>
        )
    }
}

export default Home
