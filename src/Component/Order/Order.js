import React from 'react';
import './Order.css'
const Order = (props) => {
    const{price}=props.cart;
    const length=props.cart.length;
    console.log(price)
    
    
    return (
        <div>
          <h4>Items Order: {length}</h4>
          <div className="shipping">
             <div>
                 <p>items:</p>
                 <p>Shipping Cost:</p>
                 <p>Total:</p>
                 <p>Tax:</p>
                 <p>Sub Total :</p>
               
             </div>
             <div className="price">
                 <p>{length}</p>
                 <p>${(length)>0?35:0}</p>
                 <p>$</p>
                 <p>$0</p>
                 <p>$0</p>
             </div>
            
          </div>
          <h2>Order Total : $0</h2>
        </div>
    );
};

export default Order;