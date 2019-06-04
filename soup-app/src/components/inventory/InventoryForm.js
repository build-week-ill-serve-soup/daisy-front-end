import React from 'react'

function InventoryForm(props) {
    return (
        <div className='inventory-form'>
            <form>
                <input
                    placeholder="Item"
                />
                <input
                    placeholder="Quantity"
                />
                <input
                    placeholder="Unit Type"
                />
                <input
                    placeholder="Category"
                />
                <input
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
