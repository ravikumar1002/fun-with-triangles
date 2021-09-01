const   quizForm = document.querySelector(".quiz-form")
const  submitAnsBtn = document.querySelector("#submit-ans")     
const  outputMsg = document.querySelector("#output-msg")

const  answer =["90°", "right angled","one right angle","Equilateral triangle", "100°", "30°", "a + b + c","12, 16, 20", "no", "45°"   ]

function calculateScore(){
    let score = 0
    let index = 0
    let dataquiz = new FormData(quizForm)
    for ( let value of dataquiz.values()){
       if(value === answer[index]){
           score++
       }
       index++
 
    }
    outputMsg.innerText = `The score is ${score}`

}

submitAnsBtn.addEventListener("click", function(){
    calculateScore()
})