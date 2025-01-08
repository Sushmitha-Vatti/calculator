let display = document.getElementById('display');

//operators
let clear  = document.getElementById('clear');
let equal = document.getElementById('equal');

clear.addEventListener('click', ()=>{
    display.value = ""
    result=0;
})


let result = 0;

function insert(num){
    result = display.value + num;
    display.value = result;
    // console.log(result)  
    return result;
}

equal.addEventListener('click', ()=>{
    let showResult = eval(result);
    // console.log(showResult)
    display.value = "";
    display.value = showResult;
})