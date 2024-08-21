const button= document.querySelector("button")
const body= document.querySelector("button")
const color= ['red', 'green', 'yellow', 'blue','purple', 'pink']

body.style.background= 'blue'

button.addEventListener('click', changeB)

function changeB(){
    const colorIndex= parseInt(Math.random()*color.length)
    body.style.backgroundColor= color[colorIndex]
}