/*Capitalise the first letter of each sentence of a paragraph.(Score 3)
Input:- let str = "javascript is the world’s most popular programming language. it is the programming langu
age of the web. and it is easy to learn.";
Output:- Javascript is the world’s most popular programming language. It is the programming language of
the web. And it is easy to learn.*/

let str = `javascript is the world’s most popular programming language. it is the programming language of the web. and it is easy to learn.`;

// split the word using split method from each space, then it will convert to an array
let arr = str.split(' ')
// console.log(arr);

// create a empty array for saving final output
 let final_output = []

// itrate each element of array using for loop

for(i=0;i<arr.length;i++){
   // arr[i] itrate the elemens of array
   // arr[i][0] itrate the 0th position/first letter of the array
   // toUpperCase() is the metheod for convert the letter to upprcase 
   // save the output in to a variable

   let F_letter = arr[i][0].toUpperCase()

   // slice method using for create a new string/array from exsisting string/array
   // slice contains two elements in the paranthisis first one for starting idux, second for stopping indux + 1 
   // arr[i].slice(1,) itrate new string from each elemnt of array from first indux
   // save the vale to a variable

   let rest_words = arr[i].slice(1,)
   // both values concat using + method and save to output

   let output = F_letter+rest_words

   // add each value to empty array using push methed

   final_output.push(output)
  
}
// join methed will convert the array to string and replace all metehed will use to replace comma to space
console.log(final_output.join(',').replaceAll(',',' '));

