import React, { Component } from 'react'
import axios from 'axios'
import InventoryForm from './InventoryForm'

export class AddInventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            amount: '',
            unit: '',
            price: '',
            supplier_name: '',
            supplier_contact: '',
            image: '',
            categoryID: ''
        };
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

   
    addItem = e => {
        e.preventDefault();
        axios
            .post('https://kitchen-soup-backend.herokuapp.com/api/items', this.state)
            .then(res => {
                this.setState({
                    inventoryItems: res.data
                })
                this.props.history.push('/')
            })
            .catch(error => console.log(error.res))
    }


    render() {
        return (
            <div>
                <InventoryForm addItem={this.addItem} />
            </div>
        )
    }
}

export default AddInventory
