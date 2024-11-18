var btn = document.querySelector("button")
var b = document.querySelector("h5")

var flag = 0;
btn.addEventListener("click", function () {
    if (flag === 0) {
        btn.innerHTML = "Remove"
        btn.style.backgroundColor = "red"
        b.innerHTML = "Friends"
        b.style.color = "springgreen"
        b.style.borderColor = "springgreen"
        // btn.style.borderColor = "springgreen"

        flag = 1;
    }
    else {
        btn.style.backgroundColor = "springgreen"
        b.innerHTML = "strainger"
        b.style.color = "red"
        b.style.borderColor = "red"
        btn.innerHTML = "Add Friend"
         
        flag = 0;
    }
})
