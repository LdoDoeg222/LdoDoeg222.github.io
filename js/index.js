let a = document.querySelectorAll(".feature")
console.log(a)
let randomNumber = Math.ceil(Math.random() * a.length)
let f = document.querySelector(`.feature:nth-child(${randomNumber})`)
console.log(f)
f.style.backgroundColor = '#fefaf0'

//

const btn = document.querySelector('button')
function func() {
	btn.innerText = "钮按个一"
}
btn.addEventListener('click', func)

const url = [
	"./assets/img/w1920h1200/img0.jpg",
	"./assets/img/w1920h1200/img1.jpg",
	"./assets/img/w1920h1200/img2.jpg",
	"./assets/img/w1920h1200/img3.jpg",
	"./assets/img/w1920h1200/img4.jpg",
	"./assets/img/w1920h1200/img7.jpg",
	"./assets/img/w1920h1200/img8.jpg",
]

let slider = document.querySelector(".slider img")
let index = 0
let slideTimer

slider.src = url[url.length - 1]

function nextSliderPicture() {
	if (index >= url.length) {
		index = 0
	}
	slider.src = url[index++]

	console.log(slider)
}

slider.addEventListener('mouseenter', function funct(e){
	clearInterval(slideTimer)
})
slider.addEventListener('mouseleave', function funct(e) {
	slideTimer = setInterval(nextSliderPicture, 500)
})

