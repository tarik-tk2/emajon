import React from 'react';
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
                 
                 left
               </div>
               <div className="order-summary">
                  right
               </div>
           </div>
        </div>
    );
};

export default Container;