const blinkBtn = document.querySelector(".blinkButton")
const win = document.querySelector(".blinkWindow")
const doneBtn = document.querySelector(".blinkWindow button")
const cancelBtn = document.querySelector(".blinkWindow button~button")


function appear(){
    win.style.opacity = 1
    win.style.top = "50%"
}

function disppear(){
    win.style.opacity = 0
    win.style.top = "52%"
}

blinkBtn.addEventListener('click', appear)
doneBtn.addEventListener('click', disppear)
cancelBtn.addEventListener('click', disppear)