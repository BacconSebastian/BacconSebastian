const nav = document.querySelector('nav')
const corrector_nav = document.querySelector('.corrector_nav')

window.addEventListener('scroll', () =>{
    nav.classList.toggle('active', window.scrollY > document.documentElement.clientHeight)
    corrector_nav.classList.toggle('active', window.scrollY > document.documentElement.clientHeight)
})