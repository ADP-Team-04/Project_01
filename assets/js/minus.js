var x,y,minus;
var tempX,tempY;
function clickResult(){  
    nofalse = true;
    x = document.getElementById("num1").value;
    y = document.getElementById('num2').value;
    try {
        tempX = new Function('return ' + x)();
     } catch (err) {
        document.getElementById("alert-error1").innerHTML = '*Không đúng định dạng số';
        nofalse = false;
        try {
            tempY = new Function('return ' + y)();
         } catch (err) {
            document.getElementById("alert-error2").innerHTML = "*Không đúng định dạng số";
         }
     }
     try {
        tempY = new Function('return ' + y)();
     } catch (err) {
        document.getElementById("alert-error2").innerHTML = '*Không đúng định dạng số';
        nofalse = false;
     }
    if(nofalse) {
        window.location.href = 'resultMinus.html';
    }
    minus = x - y ;
    console.log(minus);
    localStorage.setItem("Input", minus);
}
function deleteEle(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("alert-error1").innerHTML = '&emsp;';
    document.getElementById("alert-error2").innerHTML = '&emsp;';
    
}
function exitResult(){
    window.location.href= 'index.html';
}
function exitMinus(){
    window.location.href = 'index.html';
}
function countinueResult(){
    window.location.href= 'minus.html';
}
function copyResult(){
    let text = document.getElementById('result-last').value;
    navigator.clipboard.writeText(text);
    alert('Copy thành công');
}

