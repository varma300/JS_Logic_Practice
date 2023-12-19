`Callback hell in JavaScript refers to the situation where you have multiple nested callback functions, making your code incredibly hard to read, debug, and maintain. It's like a pyramid of doom, built layer upon layer of callbacks, leading to messy and tangled logic.

Here's how it typically happens:

You initiate an asynchronous operation using a function that takes a callback function as an argument. This callback will be called with the result of the operation when it finishes.
Inside the callback, you may need to perform another asynchronous operation, again involving a callback.
This nesting can continue, adding more and more layers of callbacks, each dependent on the previous one finishing.
Why is this problematic?

Indentation explosion: The code becomes deeply indented, making it visually confusing and difficult to follow the flow of execution.
Error handling becomes a nightmare: Debugging errors within nested callbacks is challenging, as the error source might be buried several layers deep.
Readability suffers: The logic becomes convoluted and hard to understand, especially for those unfamiliar with the code.
`

function getUserID(userName, callback) {
    setTimeout(() => callback(1234), 1000)
}

function getEmailAdd(userID, callback) {
    setTimeout(() => callback('user@testmail.com'), 500)
}


function logEmailId(email) {
    console.log(`user email : ${email}`);
}


getUserID('Sree', (userID) => {
    getEmailAdd(userID, (email) => {
        logEmailId(email)
    })
})