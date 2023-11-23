

/*
A JavaScript array is a collection of values, each with an index. 
Arrays are used to store multiple values of the same type.
Array elements are accessed using their indices, which are non-negative integers.
The first element has an index of 0, the second element has an index of 1, 
and so on. JavaScript arrays are dynamic, 
 which means that they can grow and shrink as needed.
  */

 let arr = [1,2,true,false,'string'];
 console.log(arr);
 
 // length
 
 let len = arr.length;
 console.log(len);
 
 // toString
 let str = arr.toString();
 console.log( str);
 
 // pop / push
 
 let POP = arr.pop();
 console.log(arr);
 console.log(POP);
 
 arr.push('name')
 console.log(arr);
 
 
 // shift / unshift
 
 arr.shift();
 console.log(arr);
 
 arr.unshift(45);
 console.log(arr);
 
 // join
 
 str = arr.join(' and ')
 console.log( str);
 
 // splice
 
 arr.splice(1,0, 99, 'text');
 console.log(arr);
 
 // slice
 
 let arr1 = arr.slice(2,5);
 console.log(arr1);
 
 
 