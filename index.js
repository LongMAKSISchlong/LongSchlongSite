var el = document.getElementById("tollesBild");

var button= document.getElementsByClassName("redButton")[0]

console.log(button)

function showImage() {
    el.removeAttribute("class")
    button.classList.add("hidden")
}