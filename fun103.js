const a = prompt("Enter any value of X:");
const b = prompt("Enter any value of Y:");
let x = parseInt(a);
let x = parseInt(b);

function myNumber(x,y){
    let z =  x + y;
    console.log("${z} = ${x} + ${y}");
    document.getElementById("hContent").innerHTML = "${z} = ${x} + ${y}";
}
myNumber(x,y);