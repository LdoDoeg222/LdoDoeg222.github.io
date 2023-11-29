let fli = document.createElement('li')
let logo_path = new String("活动社区图标资源链接")
let title = new String("活动社区名")
let text = new String("活动社区情况")

const act_contain = document.querySelector('.activity-container')
const fea_contain = document.querySelector(".feature-container")
const fea_banner = document.querySelector(".feature-banner")
const feature = document.querySelector(".feature")

console.log(fea_contain.offsetHeight)
console.log(feature.offsetLeft)

act_contain.appendChild(fli)

// 随机子元素
let a = document.querySelectorAll(".feature")
console.log(a)
let randomNumber = Math.ceil(Math.random() * a.length)
let f = document.querySelector(`.feature:nth-child(${randomNumber})`)
console.log(f)
f.style.backgroundColor = '#fefaf0'

// fea_banner.removeChild(feature)
// fea_banner.removeChild(feature)
// fea_banner.removeChild(fea_banner.firstChild)

