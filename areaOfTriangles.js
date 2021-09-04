const triangleFirstinput = document.querySelector("#input-1")
const triangleSecondInput = document.querySelector("#input-2")
const triangleThirdInput = document.querySelector("#input-3")
const CalculateBtn = document.querySelector("#calculate")
const outputMsg = document.querySelector(".output-msg")
const contentArea = document.querySelector(".content-area")

function calculateAreaTriangle(a, b, c) {
    let spm = (1 / 2) * (a + b + c)
    let area = Math.sqrt(spm * (spm - a) * (spm - b) * (spm - c))

    return area
}

function checkArea() {
    let areaValue = calculateAreaTriangle(Number(triangleFirstinput.value), Number(triangleSecondInput.value), Number(triangleThirdInput.value))
    outputMsg.style.padding ="1.2rem"
    if ((+triangleFirstinput.value > 0) && (+ triangleSecondInput.value > 0) && (+ triangleThirdInput.value > 0)) {
        if (areaValue) {
            outputMsg.innerText = `Area of a triangle using heron's formula is ${areaValue.toFixed(2)} units`
        } else {
            console.log(areaValue)
            outputMsg.innerText = "Enter valid side lengths such that each side lengths"
            //  console.log(typeof triangleFirstinput.value)
        }
    } else if ((+triangleFirstinput.value < 0) || (+ triangleSecondInput.value < 0) || (+ triangleThirdInput.value < 0)) {
        outputMsg.innerText = "The length in - "

    } else {
        outputMsg.innerText = "Enter valid side lengths such that each side lengths"

    }
}

CalculateBtn.addEventListener("click", function () {
contentArea.style.marginBottom = "0.1rem";
    checkArea()
})
