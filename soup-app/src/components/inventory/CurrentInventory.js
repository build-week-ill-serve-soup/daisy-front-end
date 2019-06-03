import React, { Component } from 'react'
import InventoryData from '../inventory/InventoryData'
import InventoryItem from './InventoryItem';

export class CurrentInventory extends Component {
    constructor() {
        super();
        this.state= {
            inventoryItems: InventoryData
        }
    }

    render() {
        return (
            <div className='inventory-data'>
                {this.state.inventoryItems.map(item => {
                    return (
                        <InventoryItem item={item} />
                    )
                })}
            </div>
        )
    }
}

export default CurrentInventory
