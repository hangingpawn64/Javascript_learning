// My Method
// let num1 = parseInt(prompt("Enter The Number"));

// // let arr = []
// // for (let index = 0; index < num1; index++) {
// //     const num1 = arr[index];
// //     arr.push(num1-1)
// // } ---> wrong

// let arr = [];
// for (let i = 1; i <= num1; i++) {
//     arr.push(i);
// }
 
// const factorial = arr.reduce((acc, val) => acc * val, 1);
// console.log(factorial)

//CodeWithHarry Method

let a = 7

// this is first way using only reduce and no loop (23-27)
function factorial(number){
   let arr = Array.from(Array(number+1).keys())
   let c = arr.slice(1,).reduce((a, b)=> a*b )
   return c
}

// this is second way using for loop and function
function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(factorial(a))
console.log(facFor(a))