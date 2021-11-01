import React from 'react';
import './Order.css'
const Order = (props) => {
    

   let totalQuantity = 0;
   let total=0;

   for(let product of props.cart){  
      
      if(!product.quantity){
          product.quantity=1;
      }
       total=total+product.price*product.quantity;
       totalQuantity=totalQuantity+product.quantity;
    
       
   }
 

//   let total= props.cart.reduce(function(prev,curr){return prev+curr.price},0);
  let shipping=totalQuantity>0?35:0;
   let tax= total*.08;
   let subTotal= total+tax+shipping;
   
 
    return (
        <div>
          <h4>Items Order: {totalQuantity}</h4>
          <div className="shipping">
             <div>
                 <p>items:</p>
                 <p>Shipping Cost:</p>
                 <p>Total:</p>
                 <p>Tax:</p>
                 <p>Sub Total :</p>
               
             </div>
             <div className="price">
             <p>{totalQuantity}</p>
           
                 <p>${(totalQuantity)>0?35:0}</p> 
                <p>${total.toFixed(2)}</p>
                 <p>${tax.toFixed(2)}</p>
                 <p>${subTotal.toFixed(2)}</p>
             </div> 
            
          </div> 
       <h3 style={{color: 'red'}}>Order Total : ${subTotal.toFixed(2)}</h3> 
        </div>
    );
};

export default Order;