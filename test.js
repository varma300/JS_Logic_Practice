
/*
A string in JavaScript is a data type that represents text.
 It is a sequence of characters enclosed in single or double quotes.

*/

let str = `A string in JavaScript is a data type that represents text.
It is a sequence of characters enclosed in single or double quotes.`;

// length
let len = str.length
console.log(len);

//slice

let sls = str.slice(12,22);
console.log(sls);

//replace / replaceAll

let rps = str.replace('is','was')
let rpsal = str.replaceAll('is', 'HAVE')
console.log(rpsal);

//toUpperCase / toLowercase

let up = str.toUpperCase()
console.log(up);

let loc = up.toLowerCase()
console.log(loc);

//concat

let x = 'hello';
let y = 'hi';
let out = y.concat(x)
console.log(out);

let out2 = x+ ' ' +y;
console.log(out2);

// trim

let wsp = '  hi  hello  ';
console.log(wsp);
let trm = wsp.trim();
console.log(trm);

let tst = wsp.trimStart();
console.log(tst);

let ted = wsp.trimEnd();
console.log(ted);

//padStart / padEnd

let a = '00';

let o = a.padStart(5,'*')
console.log(o);

let oe = a.padEnd(3,'#')
console.log(oe);

//caheAt

let name = 'my nAme is khan';
let cA = name.charAt(5);
console.log(cA);


//charCodeAt 

let CCA = name.charCodeAt(4);
console.log(CCA);