
document.addEventListener("DOMContentLoaded", calculater)
function calculater() {



// Global variables
const addButton = document.getElementById("addButton");
const subButton = document.getElementById("subButton"); 
let userNum = document.getElementById("userNumber");
let result = document.getElementById("result");


// event handlers logic



const addNum = ((e) => {
    let newResult = parseInt(result.textContent) + parseInt(userNum.value);
    result.textContent = newResult;
    
});

const subNum = ((e) => { 
    let newResult = parseInt(result.textContent) - parseInt(userNum.value);
    result.textContent = newResult;
    
});

subButton.addEventListener("click", subNum)
addButton.addEventListener("click", addNum)
};



  


 

   


    


