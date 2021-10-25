import React from 'react';
import './DisplayProduct.css'
import logo  from '../../images/logo.png'
const DisplayProduct = () => {
    return (
        <div className="product">
            <div className="image">
                <img src="" alt="" />
            </div>
             <div className="details">
                 <h3>Title</h3>
                 <p><span>by:samsung</span></p>
                <div className="cart-features">
                    <div className="add-cart">
                        <p><span>$ price</span></p>
                        <p>only 51 left in stock -order now</p>
                        <button> add to cart</button>
                    </div>
                    <div className="features">
                        <h3>Features</h3>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default DisplayProduct;