// 按钮

// const btn = document.querySelector('button')
// function func() {
// 	btn.innerText = "钮按个一"
// }
// btn.addEventListener('click', func)


// 轮播图
// const url = [
// 	"./assets/img/w1920h1200/img0.jpg",
// 	"./assets/img/w1920h1200/img1.jpg",
// 	"./assets/img/w1920h1200/img2.jpg",
// 	"./assets/img/w1920h1200/img3.jpg",
// 	"./assets/img/w1920h1200/img4.jpg",
// 	"./assets/img/w1920h1200/img7.jpg",
// 	"./assets/img/w1920h1200/img8.jpg",
// ]
// let slider = document.querySelector(".slider img")
// let index = 0
// let slideTimer
// slider.src = url[url.length - 1]
// function nextSliderPicture() {
// 	if (index >= url.length) {
// 		index = 0
// 	}
// 	slider.src = url[index++]
// 	console.log(slider)
// }
// slider.addEventListener('mouseenter', function funct(e) {
// 	clearInterval(slideTimer)
// })
// slider.addEventListener('mouseleave', function funct(e) {
// 	slideTimer = setInterval(nextSliderPicture, 500)
// })

// 导航栏常驻高亮
// let navElements = document.querySelectorAll(".nav a")

// for (let i = 0; i < navElements.length; i++) {
// 	navElements[i].addEventListener('mouseenter', function () {
// 		console.log('enter')
// 		for(let i = 0; i < navElements.length; i++) {
// 			navElements[i].classList.remove('highlight')
// 		}
		
// 		navElements[i].classList.add('highlight')
// 	})
// }

// 触碰切换样式，离开取消
const nav = document.querySelector('nav')
console.log(nav.children)
nav.addEventListener('mouseover', function (e) {
	if (e.target.tagName === 'A') {
		document.querySelector('nav a.highlight').classList.remove('highlight')
		e.target.classList.add('highlight')
	}
})