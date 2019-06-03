import React, { Component } from 'react'
import CurrentInventory from '../inventory/CurrentInventory'

export class Home extends Component {
    render() {
        return (
            <div className='home-page'>
                <div className='current-inventory'>
                    <CurrentInventory />
                </div>
            </div>
        )
    }
}

export default Home
