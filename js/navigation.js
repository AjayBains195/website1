nav = document.querySelector('.nav')

window.addEventListener('scroll'. fixnav)

function fixnav() {
    if (window.scrollV > 223) {
        nav.classList.add('active')
    }   else {
        nav.classList.remove('active')
    }
}