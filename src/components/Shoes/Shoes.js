import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 15;
    const second = 10;
    const result = multiply(first,second);
    const sum = add(first, second)
    return (
        <div>
            <h3>This is my shoes component</h3>
            <p>Result: {result} and total: {sum}</p>
        </div>
    );
};

export default Shoes;