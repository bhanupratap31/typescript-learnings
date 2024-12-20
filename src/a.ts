function identity<T> (arg: T): T{
    return arg; 
}

let output1 = identity<string>("bhanu"); 
let output2 = identity<number>(1); 

console.log(output1.toUpperCase());
// function cout(first: string, last: string){
//     console.log("Hello my name is "+first+" "+last); 
// }

// cout("Bhanu", "Pratap"); 

// function sum(a: number, b: number){
//     return a+b; 
// }

// console.log(sum(10,20));
// interface User {
//     firstName: string, 
//     lastName: string, 
//     age: number,
//     email?: string 
// };

// function isLegal(user: User){
//     if(user.age>18) return true; 
//     return false; 
// }

// function greet(user: User){
//     console.log("Hi" + user.firstName +"!"); 
// }

// isLegal({
//     firstName: "Bhanu", 
//     lastName: "Pratap", 
//     age: 26
// });

// greet({
//     firstName: "Bhanu", 
//     lastName: "Pratap", 
//     age: 26
// });


