const blinkBtn = document.querySelector(".blinkButton")
const win = document.querySelector(".blinkWindow")
const doneBtn = document.querySelector(".blinkWindow button")
const cancelBtn = document.querySelector(".blinkWindow button~button")


blinkBtn.addEventListener('click', function(){
    win.style.opacity = 1
    win.style.top = "50%"
})

function disppear(e){
    win.style.opacity = 0
    win.style.top = "52%"
}

doneBtn.addEventListener('click', disppear)

cancelBtn.addEventListener('click', disppear)