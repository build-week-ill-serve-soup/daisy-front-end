import React, { Component } from 'react'
import axios from 'axios'

import InventoryItem from './InventoryItem';
import InventoryData from './InventoryData'

//TEMPORARY - THIS IS PULLING FROM ARRAY OF DUMMY DATA
/*
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
                <h2>Current Inventory</h2>
                {this.state.inventoryItems.map(item => {
                    return (
                        <InventoryItem item={item} />
                    )
                })}
            </div>
        )
    }
}
*/
//THIS SHOULD BE PULLING DATA FROM API

export class CurrentInventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventoryItems: []
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        const requestOptions = {
          headers: {
            Authorization: token
          }
        }
        axios
          .get('https://kitchen-soup-backend.herokuapp.com/api/users/items', requestOptions)
          .then(res => {
            this.setState({
              inventoryItems: res.data
            })
          })
          .catch(err => console.log(err.res))
      }

    render() {
        return (
            <div className='inventory-data'>
                {this.state.inventoryItems.map(item => {
                    return (
                        <InventoryItem item={this.item} />
                    )
                })}
            </div>
        )
    }
} 



export default CurrentInventory
