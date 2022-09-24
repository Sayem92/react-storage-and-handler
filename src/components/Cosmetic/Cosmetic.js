import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name,price,id} = props.cosmetic;
    
    const addTocart = (id) => {
        addToDb(id)
    }

    const removeFromCart = (id) =>{
          removeFromDb(id)
    }

    // const deleteAll = () =>{
    //     deleteShoppingCart()
    // }
    return (
        <div className='product'>
            <h2>Buy this: {name} </h2>
           <p>Only for : $ {price}</p> 
           <p><small>It id: {id}</small></p>        
           <button onClick={() => addTocart(id)}>Add to Cart</button>
           <button onClick={() => removeFromCart(id)}>Remove</button>
           <button onClick={() => deleteShoppingCart()}>delete all</button>
        </div>
    );
};

export default Cosmetic;