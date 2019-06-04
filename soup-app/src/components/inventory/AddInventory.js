import React, { Component } from 'react'
import InventoryForm from './InventoryForm'

export class AddInventory extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    addItem = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <InventoryForm />
            </div>
        )
    }
}

export default AddInventory
