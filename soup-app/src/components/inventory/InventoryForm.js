import React from 'react'

function InventoryForm() {
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
                <button type="submit">
                    Add Item
            </button>
            </form>

        </div>
    )
}

export default InventoryForm
