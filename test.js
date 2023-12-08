//array.map();
/*
Applies a function to each element of an array and returns a new array containing the results.
Useful for transforming an array of values.
*/

let arr_map = [1,2,3,4,5]; 
let out_map = arr_map.map(e=>e*5);
console.log(out_map);  // Output: [5, 10, 15, 20, 25]


// Array.filter()
/*
Creates a new array containing only elements that pass a test implemented by the provided function.
Useful for filtering out unwanted elements from an array.
*/

let arr_filter = [
    {a:1,b:2},
    {a:3,b:4},
    {a:10,b:11},
    {a:12,b:23},
    {a:15,b:27},
    {a:16,b:20},
    {a:19,b:26}
    ];
    
let out_filter = arr_filter.filter(e => e.a%2==1 && e.b%2 == 0);
console.log(out_filter);

/* Output: 
[
{a: 1, b: 2},
{a: 3, b: 4},
{a: 19, b: 26}] */

// Array.reduce()
/*
Applies a function against an accumulator and each element in the array to reduce it to a single value.
Useful for combining or summarizing an array of values.
*/

const arr_reduce = [1, 2, 3, 4, 5];

const out_reduce = arr_reduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(out_reduce); // Output: 15