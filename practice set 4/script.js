// Q.1
//console.log("har\"".length)

//Q.2
// INCLUDES ---> used to find if a certain string is present inside the main string

// const sentence = "The quick brown fox jumps over the lazy dog.";

// const word = "fox";

// console.log(
//   `The word "${word}" ${
//     sentence.includes(word) ? "is" : "is not"
//   } in the sentence`,
// );
// Expected output: "The word "fox" is in the sentence"

// const sentence = "Akshit Sudhir Tupkar";
// const group = "ir T";

// console.log(
//     `the word "${group} ${
//         sentence.includes(group) ? "is" : "is not"
//     } in the sentence`,
// );
// console.log(sentence.includes(group)); // --> gives output as true / false

// STARTSWITH ----> tells if a string starts with certain specified string returning true / false

// const str = "Saturday night plans";

// console.log(str.startsWith("Sat"));
// // Expected output: true

// console.log(str.startsWith("ur", 3)); // means kya "ur" apni original string me 3rd position se start hota hai kya
// // Expected output: true

// ENDSWITH --> determines whether a string ends with the characters of this string, returning true or false as appropriate.

// const str1 = "Cats are the best!";

// console.log(str1.endsWith("best!"));
// // Expected output: true

// console.log(str1.endsWith("best", 17));
// // Expected output: true

// const str2 = "Is this a question?";

// console.log(str2.endsWith("question"));
// // Expected output: false

//Q.3
// let userInput= prompt("Enter name in uppercase: ");
// console.log(userInput + " Was recieved");

// function uppercasemaker(){
//     return userInput.toLowerCase() ;
//    }
   
// console.log(userInput.toLowerCase());

//Q.4

// const str = "please give me Rs. 1,000";
// // Flexible RegEx to capture numbers with commas
// const match = str.match(/rs\.?\s*([\d,]+)/i);

// if (match) {
//   const amount = parseInt(match[1].replace(/,/g, ''), 10);
//   console.log(amount); // Output: 1000
// } else {
//   console.log("No amount found");
// }

//Q.5
// replace() does not modify the original string because strings are immutable in JavaScript. therefore you have to store it in a new string.
// let str="Because Stone Cold said so"
// let str[4]= "A"; --> does not work
// console.log(str);
// let newstr= str.replace(str[4], "Z");
// console.log(newstr);