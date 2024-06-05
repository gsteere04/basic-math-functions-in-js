function add(x, y) {
     return x + y;
}

function multiply(x, y) {
     return x * y;
}

function square(x) {
     return multiply(x, x);
}

function addSquares(x, y){
     return add(square(x), square(y));
}

function getInput() {
     const x = Number(document.getElementById("number1").value);
     const y = Number(document.getElementById("number2").value);
     return {x, y};
}

function displayAddResult() {
     const {x, y} = getInput();
     const result = add(x,y);
     alert(result);
}

function displayMultiplyResult() {
     const {x, y} = getInput();
     const result = multiply(x,y);
     alert(result)
}

function displaySquareResult() {
     const x = Number(document.getElementById("number1").value)
     const result = square(x);
     alert(result);
}

function displayAddSquareResult() {
     const {x, y} = getInput();
     const result = addSquares(x,y);
     alert(result);
}