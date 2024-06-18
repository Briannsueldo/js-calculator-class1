// buttons

let add = document.getElementById("add");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let division = document.getElementById("division");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");

add.textContent = "+"
minus.textContent = "-"
multiply.textContent = "*"
division.textContent = "/"
equal.textContent = "="
clear.textContent = "C"

// input container

let input = document.getElementById("input");
input.type = "number";


// clear input

let clearInput = clear.addEventListener("click", function () {
    input.value = "";
    input.focus();
});

// operations

input.addEventListener("input", function () {
    let firstValue = parseFloat(input.value);
    console.log(firstValue);

    this.removeEventListener;

    add.addEventListener("click", function () {

        input.value = "";

        input.focus();

        input.addEventListener("input", function () {
            let secondValue = parseFloat(input.value);

            let addResult = (firstValue + secondValue).toFixed(1);

            console.log(addResult);

            equal.addEventListener("click", function () {
                input.value = addResult;
            })
        })
    })

    minus.addEventListener("click", function () {

        input.value = "";

        input.focus();

        input.addEventListener("input", function () {
            let secondValue = parseFloat(input.value);

            let minusResult = (firstValue - secondValue).toFixed(1);

            console.log(minusResult);

            equal.addEventListener("click", function () {
                input.value = minusResult;
            })
        })
    })

    multiply.addEventListener("click", function () {

        input.value = "";

        input.focus();

        input.addEventListener("input", function () {
            let secondValue = parseFloat(input.value);

            let multiplyResult = (firstValue * secondValue).toFixed(1);

            console.log(multiplyResult);

            equal.addEventListener("click", function () {
                input.value = multiplyResult;
            })
        })
    })

    division.addEventListener("click", function () {

        input.value = "";

        input.focus();

        input.addEventListener("input", function () {
            let secondValue = parseFloat(input.value);

            let divisionResult = (firstValue / secondValue).toFixed(1);

            console.log(divisionResult);

            equal.addEventListener("click", function () {
                input.value = divisionResult;
            })
        })
    })
})

