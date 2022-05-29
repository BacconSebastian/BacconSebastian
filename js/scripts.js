const corrector_nav = document.querySelector('.corrector_nav')

window.addEventListener('scroll', () =>{
    corrector_nav.classList.toggle('active', window.scrollY >= document.documentElement.clientHeight)
})