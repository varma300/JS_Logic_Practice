/*
You have an array of elements, and you need to perform two operations on each element:

1. Calculate the square of each element in the array.
2. Multiply all the squared values together to get a final result.

Let's assume we have the following array:*/

let input = [1,2,3,4];

let test = (e)=>{
let pow = e.map(e => Math.pow(e,2)).reduce((t,c)=>t+c)
return pow  
}

console.log(test(input));
