import React from 'react'
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <div className="nav-links">
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>
                    </div>
                    <div>
                        <Link to="/signup">Signup</Link>
                    </div>
                    <div>
                        <Link to="/protectedHome">Manage Inventory</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation
