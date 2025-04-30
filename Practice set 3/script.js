// const studentMarks = {
//     Math: 85,
//     Science: 90,
//     English: 78,
//     History: 88,
//     Computer: 95
// };

// console.log("Student Marks:");
// for (let subject in studentMarks) {
//     // console.log(`${subject}: ${studentMarks[subject]}`); // --> this is called using template literals 
//     console.log(subject + ":" + studentMarks[subject]); //--> this is called using string interpolation
// }

//for of will not work because objects are not iterable like strings, arrays
// for (let subject of studentMarks) {
//     // console.log(`${subject}: ${studentMarks[subject]}`); // --> this is called using template literals 
//     console.log(subject + ":" + studentMarks[subject]); //--> this is called using string interpolation
// }


//Q3
const number = {
    value: 4
};

let userInput = parseInt(prompt("Guess the number I chose between 1 to 10"));

while (userInput !== number.value) {
    console.log("Try Again!");
    userInput = parseInt(prompt("Guess the number I chose between 1 to 10"));
}

console.log("Correct Guess!!");