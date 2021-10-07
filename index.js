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

//event listeners
contactHide.addEventListener('click', () => {
    setTimeout(()=>{
        addHidden(openMail)
        removeHidden(closedMail) 
    }, 300)
})
closedMail.addEventListener('click', () => {
    addHidden(closedMail)
    removeHidden(openMail)
    setTimeout(() => { alert("Sorry, I hid it up here because I don't like spam... Feel free to copy my email though! (its also on my resume...) nate.mitch11@gmail.com") }, 300)
})

