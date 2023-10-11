/*Create a function that always returns true for every item in a given list. 
However, if an element is the word "flick", switch to always returning the opposite boolean value.*/


function flick_test(arr){ 
    // cretate a varible assinge true as value
    let flicker = true;
    // create an emplty array
    let out = [];
    
    // itrate the array using for loop
    for(i=0;i<arr.length;i++){
        // check if arra elemt is equal to 'flick' using if condition
        if(arr[i]=='flick'){
            // if the condition pass, change the value of flicker to opposit boolean (true becom false)
            // once it change, the new vale will reasign in to the variable till next 'flick' comes
            flicker = !flicker;
            // push the output in to the array
           out.push(flicker)

        }
        else{
            // if not equal to 'flick' the value add exsisting boolean value add to array
            out.push(flicker)
        }
    }
    // print the output
    console.log(out);
}

flick_test([1,2,3,4,'flick',1,2,3,4,'flick',1,2,3])