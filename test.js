// camelCase

let word = 'my name is khan'

// for converting camelCase split the string and create an new array

let arr = word.split(' ')
// console.log(arr); // checking the output of the arr


// converting 0 th index string in lowercase
let f_word = arr[0].toLowerCase();
// console.log(f_word);// checking the output of the f_word

// itrate from 1st indux element using for loop
// create a variable for save output of for loop
let out = [];

for (i=1;i<arr.length;i++){
    // find the first letter and convert to upper case
 let Cap_let = arr[i][0].toUpperCase();
//  console.log(Cap_let);

    // take rest letters and confirm it is lowercase
    let rest_ltr = arr[i].slice(1,)
    // console.log(rest_ltr);
    let str = Cap_let + rest_ltr;
    out.push(str)
}
// console.log(out);
let final = f_word+out.join().replaceAll(',','');

console.log(final);
