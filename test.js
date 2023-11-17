// Global Scope
const pie = 3.14;


function fn1(){
    console.log(pie);//3.14

    // function scope
    const age = 32;
    console.log(age); //32
}

// block scope

if (true){
const fullName = 'Rahul Varma TK';
console.log(fullName); //Rahul Varma TK

}

console.log(pie);  //3.14
console.log(age); // RefferenceError : age is not defined
console.log(fullName); // RefferenceError : fullName is not defined
