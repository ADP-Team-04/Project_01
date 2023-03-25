var x,y,minus;
function clickResult(){  
    window.location.href = 'resultMinus.html'
    x = Number(eval(document.getElementById("num1").value));
    y = Number(eval(document.getElementById("num2").value));
    minus = x-y;
    localStorage.setItem("Input",minus);
}
function deleteEle(){
    document.getElementById("num1".value);
    document.getElementById("num1".value);
}