// card mask

let cardNumber = '3214-2654-6549-4568';
let cardLen = cardNumber.length;
let maskCard = cardNumber.slice(-4).padStart(cardLen,'*');

console.log(maskCard);   //***************4568






















`
Promises are like little IOUs in JavaScript. They represent the eventual completion (or failure) of an asynchronous operation and its resulting value. Instead of waiting for the operation to finish before moving on, promises let you register functions to be called later, when the result is available. This makes your code cleaner and more readable.

Here's a breakdown of how promises work:

1. Creating a Promise:

You can create a promise using the new Promise constructor and providing an executor function. This function takes two arguments: resolve and reject. You call resolve with the successful result of the operation and reject with the error, if any.

2. Consuming a Promise:

You can't directly access the result of a promise. Instead, you use its then and catch methods to register functions to be called when the promise is resolved or rejected, respectively.
`


// function getUserId(userName){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>resolve(1234),1000)
//     })
// }

// function getEmailAdd(userID){
// return new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve('user@testmail.com'), 500)
// })
// }

// function logEmailId(email){
//     console.log(`user mail id : ${email}`);
    
// }




// getUserId('Sree')
// .then((userID)=>getEmailAdd(userID))
// .then((email)=>logEmailId(email))
// .catch(error =>console.error(error))


// async function main(){
//     try{
//         const userID = await getUserId('SRee')
//         const email = await getEmailAdd(userID)
//         logEmailId(email)
//     }catch(error){
//         console.error(error);
//     }
// }

// main()