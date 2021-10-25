import React from 'react';
import { useEffect ,useState} from 'react';

import DisplayProduct from '../DisplayProduct/DisplayProduct';
import Header from '../Header/Header';
import NabBar from '../NavBar/NabBar';
import Order from '../Order/Order';
import './Container.css'
const Container = () => {
     const [products,setProducts]=useState([]);
       useEffect(()=>{
          fetch('./fakeData/products.JSON')
          .then(response=>response.json())
          .then(data=>setProducts(data));
       },[])
    return (
        <div>
           <Header/>
           <NabBar/>
           <div className="display-section">
               <div className="product">
                 
            {products.map(product => (<DisplayProduct key ={product.key} data={product}/>))}
               </div>
               <div className="order-summary">
                   <h3>Order Summary</h3>
                <Order/>
               </div>
           </div>
        </div>
    );
};

export default Container;