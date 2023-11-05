// find the total price for product

const product = [
    {name:'a', qty:2, price:50},
    {name:'d', qty:1, price:100},
    {name:'c', qty:5, price:10},
]

const price = product.map(e=>e.qty * e.price).reduce((a,c)=>a+c)

console.log('total price = ' + price);