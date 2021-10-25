import React from 'react';
import './Order.css'
const Order = () => {
    return (
        <div>
          <h4>Items Order: 0</h4>
          <div className="shipping">
             <div>
                 <p>items:</p>
                 <p>Shipping Cost:</p>
                 <p>Total:</p>
                 <p>Tax:</p>
                 <p>Sub Total :</p>
               
             </div>
             <div className="price">
                 <p>$0</p>
                 <p>$0</p>
                 <p>$0</p>
                 <p>$0</p>
                 <p>$0</p>
             </div>
            
          </div>
          <h2>Order Total : $0</h2>
        </div>
    );
};

export default Order;