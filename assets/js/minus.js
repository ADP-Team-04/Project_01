let x,y,sum;
function clickResult(){  
    x = Number(eval(document.getElementById("num1").value));
    y = Number(eval(document.getElementById("num2").value));
    sum = x-y;
    localStorage.setItem("Sum",sum);
}
