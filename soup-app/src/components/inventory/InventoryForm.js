import React from 'react'

const InventoryForm = props => {
    return (
        <div className='inventory-form'>
            <form onSubmit={props.addItem}>
                <input
                    onChange={props.handleInputChange}
                    value={props.name}
                    type="text"
                    placeholder="Item"
                />
                <input
                    onChange={props.handleInputChange}
                    value={props.amount}
                    type="number"
                    placeholder="Quantity"
                />
                <input
                    onChange={props.handleInputChange}
                    value={props.unit}
                    type="text"
                    placeholder="Unit Type"
                />
                <input
                    onChange={props.handleInputChange}
                    value={props.supplier_name}
                    type="text"
                    placeholder="Supplier Name"
                />
                <input
                    onChange={props.handleInputChange}
                    value={props.supplier_contact}
                    type="text"
                    placeholder="Supplier Contact"
                />
                <input
                    onChange={props.handleInputChange}
                    value={props.image}
                    type="text"
                    placeholder="Image URL"
                />
                <button type="submit">
                    Add Item
                </button>
            </form>

        </div>
    )
}

export default InventoryForm
