import React, { Component } from 'react'
import InventoryData from '../inventory/InventoryData'


const InventoryItem = props => {
    return (
        <div className='inventory-card'>
            <div className='item-image'>
            <img src={props.item.imageURL} alt='Inventory Item' />
            </div>
            <div className='item-info'>
                <h3>{props.item.item}</h3>
                <p>
                    <strong>Quantity: </strong>
                    {props.item.quantity} {props.item.unitType}
                </p>
                <p>
                    <strong>Category: </strong>
                    {props.item.category}
                </p>
            </div>
        </div>
    )
}

export default InventoryItem
