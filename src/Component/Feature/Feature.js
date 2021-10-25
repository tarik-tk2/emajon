import React from 'react';

const Feature = (props) => {
    
    const{description,value}=props.feature;
    return (
        <div>
           <p>{description}:{value}</p>
        </div>
    );
};

export default Feature;