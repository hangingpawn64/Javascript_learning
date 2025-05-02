//Q.1.
document.getElementById("box1").style.color="red";
//Q.2
// it does not show tbody in view page source however it does show tbody in inspect
//Q.3
document.querySelector(".Q3").firstElementChild.style.color="green";
document.querySelector(".Q3").lastElementChild.style.color="green";
//Q.4
//M1
// document.querySelectorAll(".listitem").forEach(item => {
//     item.style.color = "cyan";
// });

//M2
const items = document.getElementsByClassName("listitem");
for (let i = 0; i < items.length; i++) {
    items[i].style.color = "cyan";
}
//Q.5
//NONE OF THESE