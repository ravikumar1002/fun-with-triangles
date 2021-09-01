const firstInputSection = document.querySelector("#user-input")
const secondInputSection = document.querySelector("#user-input-2")
const thirdInputSection = document.querySelector("#user-input-3")
const checkBtn = document.querySelector("#check-triangle-btn")
const outPutMsg = document.querySelector("#show-output")
const contentBox = document.querySelector(".contents-items")

function calculateSumOfAngles() {
    let firstInputValue = Number(firstInputSection.value)
    let secondinputValue = Number(secondInputSection.value)
    let thirdInputValue = Number(thirdInputSection.value)
    let sumOfAngles = firstInputValue + secondinputValue + thirdInputValue
    return sumOfAngles
}

function isTriangle() {
    let sumOfAnglesValue = calculateSumOfAngles()
    if ((firstInputSection.value > 0) && (secondInputSection.value > 0) && (thirdInputSection.value > 0)) {
        if (sumOfAnglesValue === 180) {
            outPutMsg.innerText = "Yay, the angles form a triangle!"
        } else {
            outPutMsg.innerText = "Oh Oh! The angle doesn't form a triangle"
        }
    } else {
            outPutMsg.innerText = " The triangle doesn't have right angle"
    }

}

checkBtn.addEventListener("click", function () {
   contentBox.style.marginBottom= "0.3rem"
    isTriangle()
})













