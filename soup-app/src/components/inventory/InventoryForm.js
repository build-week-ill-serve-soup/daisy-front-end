import React from 'react'

function InventoryForm(props) {
    return (
        <div className='inventory-form'>
            <form>
                <input
                    type="text"
                    placeholder="Item"
                />
                <input
                    type="number"
                    placeholder="Quantity"
                />
                <input
                    type="text"
                    placeholder="Unit Type"
                />
                <input
                    type="text"
                    placeholder="Supplier Name"
                />
                <input
                    type="text"
                    placeholder="Supplier Contact"
                />
                <input
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
