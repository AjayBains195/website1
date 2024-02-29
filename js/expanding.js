panels = document.querySelectorAll('.panel')
console.log("Hello")
panels.forEach(panel => {
    panel.addEventListner('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})



function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active' )
    })
}