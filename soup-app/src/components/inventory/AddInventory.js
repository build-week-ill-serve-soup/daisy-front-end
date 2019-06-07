import React, { Component } from 'react'
import InventoryForm from './InventoryForm'

export class AddInventory extends Component {
    constructor() {
        super();
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

    addItem = e => {
        e.preventDefault();
        axios
            .post('https://kitchen-soup-backend.herokuapp.com/api/users/items', {
                id: this.state.id,
                name: this.state.name,
                amount: this.state.amount,
                unit: this.state.unit,
                price: this.state.price,
                supplier_name: this.state.supplier_name,
                supplier_contact: this.state.supplier_contact,
                image: this.state.image,
                categoryID: this.state.categoryID
            })

            .then(res => {
                this.setState({
                    id: '',
                    name: '',
                    amount: '',
                    unit: '',
                    price: '',
                    supplier_name: '',
                    supplier_contact: '',
                    image: '',
                    categoryID: ''
                });
            })

            .catch(err => {
                console.log(err);
            })
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <InventoryForm />
            </div>
        )
    }
}

export default AddInventory
