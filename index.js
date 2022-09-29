const button = document.querySelector('.button')
console.log(button)

const affirmation = document.querySelector('.affirmation')
console.log(affirmation)

const enter = document.querySelector('.enter')
console.log(enter)

button,affirmation.addEventListener('click' , function () {
    button.style.opacity = 0
    affirmation.style.opacity = 1
    enter.style.opacity = 1
    console.log(enter)
}

)



