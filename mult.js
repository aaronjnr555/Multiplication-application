const num1 = Math.floor (Math.random() * 10)
const num2 = Math.floor (Math.random() * 10)
const questionEl = document.getElementById("question")
const correctAns = num1 * num2
const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")
const btnEl = document.getElementById("btn")
const displayEl = document.getElementById("display")
const scoreEl = document.getElementById("score")

let score = JSON.parse(localStorage.getItem('score'));

if(!score){
    score = 0;
}
scoreEl.innerText = `score: ${score}`

questionEl.innerText = `What is ${num1} multiply by ${num2}?`

formEl.addEventListener('submit',()=>{
    const userAns = +inputEl.value
    if( userAns === correctAns){
        score++;
        updateLocalStorage()
    }
    else{
        score--;
        updateLocalStorage( ) 
    }
})

function updateLocalStorage(){
    localStorage.setItem('score', JSON.stringify(score))
}