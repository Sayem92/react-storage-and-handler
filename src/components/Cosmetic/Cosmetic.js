import React from 'react';
import { addToDb } from '../../utilities/fakedb';

import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name,price,id} = props.cosmetic;
    
    const addTocart = (id) => {
      
        addToDb(id)
      
    }
    // const addToCartWithPara = () => addTocart(id);

    return (
        <div className='product'>
            <h2>Buy this: {name} </h2>
           <p>Only for : $ {price}</p> 
           <p><small>It id: {id}</small></p>
           {/* <button onClick={addToCartWithPara}>Add to cart</button> */}
           <button onClick={() => addTocart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;