var expr1,expr2;
var result1;
var result2;
var kqua;
var times = 0;
var input1 = false;
var input2 = false;
var nofalse = true
function clickResult() {
    nofalse = true;
    expr1 = document.getElementById("num1").value;
    expr2 = document.getElementById('num2').value;
    try {
        result1 = new Function('return ' + expr1)();
     } catch (err) {
        document.getElementById("alert-error1").innerHTML = '*Không đúng định dạng số';
        nofalse = false;
        try {
            result2 = new Function('return ' + expr2)();
         } catch (err) {
            document.getElementById("alert-error2").innerHTML = "*Không đúng định dạng số";
         }
     }
     try {
        result2 = new Function('return ' + expr2)();
     } catch (err) {
        document.getElementById("alert-error2").innerHTML = '*Không đúng định dạng số';
        nofalse = false;
     }
    if(nofalse) {
        window.location.href = 'resultMulti.html';
    }
    kqua = result1*result2;
    console.log(kqua);
    localStorage.setItem("in ra man hinh", kqua);
}
function deleteEle() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("alert-error1").innerHTML = '&emsp;';
    document.getElementById("alert-error2").innerHTML = '&emsp;';
}
function exitResult() {
    window.location.href = 'multi.html';
}
function dropKeyBoard() {
    times++;
    var board =document.getElementById("table-board-box");
    var but1 = document.getElementById("back-click");
    var but2 = document.getElementById("result-click");
    var but3 = document.getElementById("delete-click");
    if(times%2 != 0) {   
        board.style.cssText = "display: inline;";
        but1.style.cssText = "visibility: hidden;";
        but2.style.cssText = "visibility: hidden;";
        but3.style.cssText = "visibility: hidden;";
    } else {
        board.style.cssText = "display: none;";
        but1.style.cssText = "visibility: visible;";
        but2.style.cssText = "visibility: visible;";
        but3.style.cssText = "visibility: visible;";
    }
}

function clickInput(value) {
    if(input1 === true) {
        document.getElementById("num1").value += value;
    } else if (input2 === true) {
        document.getElementById("num2").value += value;
    }
}

function catchException(value1,value2) {
    try {
        value1 = new Function('return ' + expr1)();
     } catch (err) {
        document.getElementById("alert-error1").innerHTML = '*Không đúng định dạng số';
        try {
            value2 = new Function('return ' + expr2)();
         } catch (err) {
            document.getElementById("alert-error2").innerHTML = "*Không đúng định dạng số";
         }
     }
}