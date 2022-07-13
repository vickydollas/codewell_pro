const menu = document.querySelector(".menu")
const dropDown = document.querySelector("#dropdown")

menu.addEventListener("click", openMenu => {
    dropDown.classList.toggle("active")
})