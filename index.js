function addHidden(form) {
    form.classList.add('hidden')
}
function removeHidden(form) {
    form.classList.remove('hidden')
}
//Get Elements and store them in variables
//contact
let contactHide = document.getElementById('contact-hide')
let closedMail = document.getElementById('closed-env')
let openMail = document.getElementById('open-env')
let contactForm = document.getElementById('contact')
//project
let projectHide = document.getElementById('project-hide')
let projectForm = document.getElementById('projects')
//skills
let skillsHide = document.getElementById('skills-hide')
let skillsForm = document.getElementById('skills')
//about
let aboutHide = document.getElementById('about-hide')
let aboutForm = document.getElementById('about-me')
//home
let aboutShow = document.getElementById('about-show')
let skillsShow = document.getElementById('skill-show')
let projectShow = document.getElementById('project-show')
let contactShow = document.getElementById('contact-show')
let homeForm = document.getElementById('header')

//event listeners
aboutShow.addEventListener('click', () => {
    addHidden(homeForm)
    removeHidden(aboutForm)
})
aboutHide.addEventListener('click', () => {
    addHidden(aboutForm)
    removeHidden(homeForm)
})
skillsShow.addEventListener('click', () => {
    addHidden(homeForm)
    removeHidden(skillsForm)
})
skillsHide.addEventListener('click', () => {
    addHidden(skillsForm)
    removeHidden(homeForm)
})
projectShow.addEventListener('click', () => {
    addHidden(homeForm)
    removeHidden(projectForm)
})
projectHide.addEventListener('click', () => {
    addHidden(projectForm)
    removeHidden(homeForm)
})
contactShow.addEventListener('click', () => {
    addHidden(homeForm)
    removeHidden(contactForm)
})
contactHide.addEventListener('click', () => {
    addHidden(contactForm)
    removeHidden(homeForm)
    addHidden(openMail)
    removeHidden(closedMail)
})
closedMail.addEventListener('click', () => {
    addHidden(closedMail)
    removeHidden(openMail)
    setTimeout(() => { alert("Sorry, I hid it up here because I don't like spam... Feel free to copy my email though! (its also on my resume...) nate.mitch11@gmail.com") }, 300)
})

