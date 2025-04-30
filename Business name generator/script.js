function randomnumber() {
    return Math.random();
  }
  let randomvalue1 = randomnumber(); 
  let randomvalue2 = randomnumber();
  let randomvalue3 = randomnumber();

// const adjectives = {
//   crazy,
//   amazing,
//   fire
// };

// const name = {
//   engine,
//   food,
//   garments
// };

// const word = {
//   limited,
//   bros,
//   hub
// };
let adjective, shopname, word;

// generating adjective word
if (randomvalue1<0.33) {
   adjective = "crazy";
}
else if (randomvalue1<0.66) {
   adjective = "amazing";
}
else {
   adjective = "fire";
}
//generating second word
if (randomvalue2<0.33) {
   shopname = "engine";
}
else if (randomvalue2<0.66) {
   shopname = "food";
}
else {
   shopname = "garment";
}

//generating third word
if (randomvalue3<0.33) {
   word = "limited";
}
else if (randomvalue3<0.66) {
   word = "bros";
}
else {
   word = "hub";
}
console.log("the random numbers were " + randomvalue1 + " "+ randomvalue2 +" " + randomvalue3)
console.log(`${adjective} ${shopname} ${word} `)

