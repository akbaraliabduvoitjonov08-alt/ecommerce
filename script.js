
let slides = document.querySelectorAll('.slide')
let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active')
        if (i === index) slide.classList.add('active')
    })
}
document.querySelector('.next').onclick = function () {
    current++
    if (current >= slides.length) current = 0;
    showSlide(current)
}
document.querySelector('.prev').onclick = function () {
    current--
    if (current < 0) current = slides.length - 1;
    showSlide(current)
}
function nextSlide() {
    current++
    if (current >= slides.length) current = 0
    showSlide(current)
    //Auto o'\tish
}
setInterval(nextSlide, 1500)

let viewall = document.getElementById("viewall")

viewall.addEventListener(function (){
    alert("Hamma mahsulotlarni korish")
})