function add(first,second){
    return (first+ second)
}

const multiply = (first,second)=>{
    return first * second;
}

const substruction = (a,b)=> a - b



// const numbers = [1, 2, 4, 5, 6, 8, 10, 9];
// const sumReducer = (previous,current) => previous + current
// const totall = numbers.reduce(sumReducer ,0)


// const items = [
//     {id: 1, name: 'alta', price: 100},
//     {id: 1, name: 'alta', price: 100},
//     {id: 1, name: 'alta', price: 100},
//     {id: 1, name: 'alta', price: 100},
//     {id: 1, name: 'alta', price: 100},
//     {id: 1, name: 'alta', price: 100},
// ];

// const itemSumReducer = (previous, current)=> previous + current.price
// const itemTotal = items.reduce(itemSumReducer ,0)


const getTotalPrice = (products) =>{
    const reduce = (previous, current) => previous + current.price
    const total = products.reduce(reduce ,0)
    return total;
}



export {
        add,
        multiply,
        substruction,
        getTotalPrice as getTotal,
};