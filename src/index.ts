import "./styles/main.scss"

const moreBox = document.querySelector("#more")
const button = document.querySelector(".btn")

button.addEventListener("click", function () {
    moreBox.classList.toggle("load-more")
})