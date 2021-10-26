import React from 'react';
import Feature from '../Feature/Feature';
import './DisplayProduct.css'
import './DisplayProduct.css'

const DisplayProduct = (props) => {
const{name,img,price,features,stock,seller,star}=props.data;
const {onclick}=props;

    return (
        <div className="display-product">
            <div className="image">
                <img src={img} alt="" />
            </div>
             <div className="details">
                 <h3>{name}</h3>
                 <p><span>by:{seller}</span></p>
                <div className="cart-features">
                    <div className="add-cart">
                        <p><span>$ {price}</span></p>
                        <p>only {stock} left in stock -order now</p>
                        <button onClick={()=>onclick(props.data)} > add to cart</button>
                    </div>
                    <div className="features">
                        <p>ratings:{star}</p>
                        <h3>Features</h3>
                          <ul>
                          {
                           features.map(feature=><Feature key={feature.description} feature={feature}/>)
                          }
                          </ul>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default DisplayProduct;