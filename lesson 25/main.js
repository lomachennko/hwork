let box = document.createElement ('div')
box.classList = ('box')

let button = document.createElement ('div')
button.classList = ('button')
button.innerHTML = `изменить цвет`

let body = document.querySelector ('body')
body.append (button)
body.append (box)

let colors = ['red', 'green', 'blue']
let index = 0
button.addEventListener ('click', () => createColors())
function createColors() {
    box.style.backgroundColor = colors[index]
    index++
}
function createColors() {
    if (index > 2) {
        index = 0
        box.style.backgroundColor = colors[index]
    } else {
        box.style.backgroundColor = colors[index]
    }
    index++
}