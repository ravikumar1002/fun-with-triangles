const baseValue = document.querySelector("#base-value")
const heightValue = document.querySelector("#height-value")
const checkBtn = document.querySelector("#Calculate-hypotenuse-btn")
const outputMsg = document.querySelector(".output-msg")
const displayBox = document.querySelector(".contents-items")


function calculateHypotenuse(base, height) {
    let hypotenuse = Math.sqrt((base * base) + (height * height))

    return hypotenuse
}

function chckin() {

    if ((+baseValue.value > 0) && (+ heightValue.value > 0)) {

        let hypotenuseValue = calculateHypotenuse(Number(baseValue.value), Number(heightValue.value))
        outputMsg.innerText = `The length of hypotenuse is ${hypotenuseValue.toFixed(2)} in unit`
    } else if ((+baseValue.value < 0) || (+ heightValue.value < 0)) {
        outputMsg.innerText = ` Input value should not be in minus`

    } else {
        outputMsg.innerText = `Value should not be empty or zero   `

    }
}

checkBtn.addEventListener("click", function () {
    displayBox.style.marginBottom = "5rem"
    chckin()
})













