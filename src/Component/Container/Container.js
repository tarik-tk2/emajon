import React from 'react';
import DisplayProduct from '../DisplayProduct/DisplayProduct';
import Header from '../Header/Header';
import NabBar from '../NavBar/NabBar';
import './Container.css'
const Container = () => {
    
    return (
        <div>
           <Header/>
           <NabBar/>
           <div className="display-section">
               <div className="product">
                 
              <DisplayProduct/>
               </div>
               <div className="order-summary">
                 <h3>Order Summary</h3>
               </div>
           </div>
        </div>
    );
};

export default Container;