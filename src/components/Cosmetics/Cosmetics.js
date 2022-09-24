import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
   const [cosmetics, setCosmetics] = useState([])

   useEffect(() =>{

        //https://cosmetics.free.beeceptor.com
        
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCosmetics(data))

   },[])

const total = getTotal(cosmetics);

    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Money needed : {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
           
        </div>
    );
};

export default Cosmetics;





// import { add } from '../../utilities/calculate';
// // import add from '../../utilities/calculate';

// const first = 55;
//     const second = 76;
//     const total = add(first,second)

{/* <p>Total: {total}</p> */}