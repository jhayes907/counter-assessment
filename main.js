// Global variables

const add = document.getElementsByClassName("addButton");
const sub = document.getElementsByClassName("subButton"); 
const userNum = document.getElementById("userNumber");
const result = document.getElementById("result");
// console.log(userNum.value);

// event handlers logic
document.addEventListener("click", (addNum))
function addNum() {
    let newResult = parseInt(result.textContent) + parseInt(userNum.value);
    result.textContent = newResult;
}
addNum() 

    
document.addEventListener("click", minusNum); 
function minusNum() { 
    let newResult = parseInt(result.textContent) - parseInt(userNum.value);
    if (result.textContent >= 0){
    result.textContent = newResult;
    }
}


  


 

   


    


