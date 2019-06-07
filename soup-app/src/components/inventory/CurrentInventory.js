import React, { Component } from 'react'
import axios from 'axios'

import InventoryItem from './InventoryItem';

export class CurrentInventory extends Component {
    constructor() {
        super();
        this.state = {
            inventoryItems: []
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        const requestOptions = {
          headers: {
            authorization: token
          }
        }
        axios
          .get('https://kitchen-soup-backend.herokuapp.com/api/users/items', requestOptions)
          .then(res => {
            this.setState({
              inventoryItems: res.data
            })
          })
          .catch(err => console.log(err))
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
