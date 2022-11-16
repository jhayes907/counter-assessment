// Global variables

const addButton = document.getElementsByClassName("addButton");
const subButton = document.getElementsByClassName("subButton"); 
const userNum = document.getElementById("userNumber");
const result = document.getElementById("result");


// event handlers logic
subButton.addEventListener("click", subNum);


addButton.addEventListener("click", addNum);


result(() => {
    let currentValue = parseInt(result.textContent);
    return currentValue;
})

userNum(() => {
    let input = parseInt(userNum.value);
    return input;
})

function addNum() {
    let newResult = parseInt(result.textContent) + parseInt(userNum.value);
    result.textContent = newResult;
    return newResult;
}

function subNum() { 
    let newResult = parseInt(result.textContent) - parseInt(userNum.value);
    result.textContent = newResult;
    return newResult;
}


