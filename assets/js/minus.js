var x,y,minus;
function clickResult(){  
    window.location.href = 'resultMulti.html'
    x = Number(eval(document.getElementById("num1").value));
    y = Number(eval(document.getElementById("num2").value));
    minus = x-y;
    // localStorage.setItem("in ra man hinh",minus);
    document.getElementById("abc").innerHTML = minus;
}
function deleteEle(){
    document.getElementById("num1".value);
    document.getElementById("num1".value);
}