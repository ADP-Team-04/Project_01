let x,y,minus;
function clickResult(){  
    x = Number(eval(document.getElementById("num1").value));
    y = Number(eval(document.getElementById("num2").value));
    minus = x-y;
    localStorage.setItem("Minus",minus);
}
