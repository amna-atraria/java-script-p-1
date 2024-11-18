var main = document.querySelector("main")
var h2 = document.querySelector("h2")
var button = document.querySelector("button")

var flag = 0
button.addEventListener("click", function () {

if (flag === 0) {
    button.innerHTML = "Remove"
    h2.innerHTML = "FRIENDS"
    
    flag = 1
}
else {

    button.innerHTML = "Add friend"
    h2.innerHTML = "STRAINGER"
    flag = 0

}})
