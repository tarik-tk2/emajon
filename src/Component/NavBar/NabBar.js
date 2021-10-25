import React from 'react';
import './NabBar.css'

const NabBar = () => {
    return (
        <div>
            <nav>
            <a href="/home">Home</a>
            <a href="/shop">Shope</a>
            <a href="/order review">Order Review</a>
            <a href="/manage inventory">Manage Inventory</a>
         
            </nav>
        </div>
    );
};

export default NabBar;