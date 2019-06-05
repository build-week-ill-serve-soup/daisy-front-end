import React from 'react'
import Home from './Home'
import AddInventory from '../inventory/AddInventory'
import Header from '../header/Header'
import CurrentInventory from '../inventory/CurrentInventory'

function ProtectedHome() {
    return (
        <div>
            <div className='home-page-header'>
                <Header />
            </div>
            <div className='current-inventory'>
                <CurrentInventory />
            </div>
            <div className='add-inventory'>
                <AddInventory />
            </div>
        </div>
    )
}

export default ProtectedHome



