import React, { Component } from 'react'
import axios from 'axios'

import InventoryData from '../inventory/InventoryData'
import InventoryItem from './InventoryItem';

export class CurrentInventory extends Component {
    constructor() {
        super();
        this.state = {
            inventoryItems: []
        }
    }

    componentDidMount() {
        axios
          .get('https://kitchen-soup-backend.herokuapp.com/api/users/items')
          .then(response => {
            console.log(response);
            this.setState(({ inventoryItems: response.data }));
          })
          .catch(error => {
            console.error("Server Error", error);
          })
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
