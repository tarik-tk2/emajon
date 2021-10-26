import React from 'react';
import './Order.css'
const Order = (props) => {
    const length=props.cart.length;
    console.log(props.cart)
  let total= props.cart.reduce(function(prev,curr){return prev+curr.price},0);
  let shipping=length>0?35:0;
   let tax= total*.08;
   let subTotal= total+tax+shipping;
   
 
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
                 <p>${total.toFixed(2)}</p>
                 <p>${tax.toFixed(2)}</p>
                 <p>${subTotal.toFixed(2)}</p>
             </div>
            
          </div>
          <h3>Order Total : ${subTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Order;