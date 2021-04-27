var circle = document.getElementById("circle");
var UPbtn = document.getElementById("UPbtn");
var DOWNbtn = document.getElementById("DOWNbtn");

var rotateValue = circle.style.transform;
var rotateSum;

UPbtn.onclick = function () {
    rotateSum = rotateValue + "rotate(-90deg)"
    circle.style.transform = rotateSum
    rotateValue = rotateSum
}
DOWNbtn.onclick = function () {
    rotateSum = rotateValue + "rotate(90deg)"
    circle.style.transform = rotateSum
    rotateValue = rotateSum
}