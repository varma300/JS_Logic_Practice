/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
*/

function getMiddle(s)
{
  let len = s.length
  let cent = len/2
if(len % 2 == 0){
  console.log(typeof s[cent -1]+s[cent]);
}else{
  console.log(s[cent-0.5]);
}
}


getMiddle("test")
getMiddle("testing")
getMiddle("middle") 
getMiddle("A") 