import React from 'react';
import { substruction } from '../../utilities/calculate';

const Buy = () => {
    const a = 500;
    const b = 150;
    const subs = substruction(a,b)
    return (
        <div>
            <h1>This is my buy all amount</h1>
            <p>all after buy amount: {subs}</p>
        </div>
    );
};

export default Buy;