import React from 'react'
import AddInventory from '../inventory/AddInventory'
import CurrentInventory from '../inventory/CurrentInventory'

function ProtectedHome() {
    return (
        <div className='protected-home'>
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