`Both rest parameters and spread operators are powerful tools in JavaScript that deal with iterables like arrays and objects, but they achieve different things:

Rest Parameter:
Definition: A function parameter prefixed with three dots (...) that captures all remaining arguments passed to the function.
Functionality: Gathers multiple arguments into a single array.
Use case: Makes functions flexible by accepting any number of arguments.

Spread Operator:
Definition: Three dots (...) used to "unpack" an iterable like an array or object.
Functionality: Expands an iterable into its individual elements.
Use case: Simplifies syntax for passing elements of an iterable to functions or constructing new arrays/objects.
`
// Rest Parameter:


function fn(...val){
    let out = val.reduce((t,c)=>t+c);
    console.log(out);
}
fn(1,2,3,4,5,6,7,8,9,10)



// Spread Operator:

let a = [1,2,3,4];
let b = [5,6,7,8];
let c = [100,...b]
console.log(c);


let obj = {name:'rahul', age:25};
let obj2 = {place :'chennai', Qlf:'BCOM'};

let obj3 = {name:'Sree', ...obj2};
console.log(obj3);