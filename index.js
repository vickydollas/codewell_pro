const menu = document.querySelector(".menu")
const dropDown = document.querySelector("#dropdown")

menu.addEventListener("click", openMenu => {
    dropDown.classList.toggle("active")
})

// update of dropDown

const vicky = document.querySelector(".dropD")
const dropButton = false
const navButton = document.querySelector(".menu-btn")

vicky.addEventListener("click", magic => {
    if(!dropButton) {
        navButton.classList.toggle('show')
        dropButton = true
    }
})