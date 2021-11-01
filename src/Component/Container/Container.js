import React from 'react';
import { useEffect ,useState} from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

import DisplayProduct from '../DisplayProduct/DisplayProduct';
import Header from '../Header/Header';
import NabBar from '../NavBar/NabBar';
import Order from '../Order/Order';
import './Container.css'
const Container = () => {
     const [products,setProducts]=useState([]);
   //   const[storage,setStorage]=useState([]);
       useEffect(()=>{
          fetch('./fakeData/products.JSON')
          .then(response=>response.json())
          .then(data=>setProducts(data));
       },[])
       const [cart,setCart]=useState([])
       const handleCart=(data)=>{
         const newCart=[...cart,data]
         setCart(newCart)
        
         addToDb(data.key);
       }
       useEffect(()=>{
          
     if(products.length){
      const foundDedProduct= getStoredCart();
     
      let addedProduct=[];
     for(const key in foundDedProduct){
      const matchedProduct=  products.find(product=>product.key===key); 
      
      
      if(matchedProduct){
         console.log(matchedProduct);
         const quantity= foundDedProduct[key];
         matchedProduct.quantity=quantity;  
         addedProduct.push(matchedProduct)
         
      }    
     
     }
     setCart(addedProduct)
     console.log(addedProduct)
     }
        
       },[products])
      
    return (
        <div>
           <Header/>
           <NabBar/>
           <div className="display-section">
               <div className="product">
                 
            {products.map(product => (<DisplayProduct key ={product.key} onclick={handleCart} data={product}/>))}
               </div>
               <div className="order-summary">
                   <h3>Order Summary</h3>
                <Order cart={cart}/>
                <button className="review-button">Review Your Order</button>
               </div>
           </div>
        </div>
    );
};

export default Container;