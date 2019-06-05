import React from 'react'
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div>
            <div className="navigation">

                <div className="nav-links">
                    <div className="nav-link">
                        <NavLink exact to="/">
                            <p>Home</p>
                        </NavLink>
                    </div>
                    <div className="nav-link">
                        <NavLink to="/AddInventory">
                            <p>Add to Inventory</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation
