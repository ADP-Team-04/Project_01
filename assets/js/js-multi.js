var a,b;
var kqua;
var times = 0;
var input1 = false;
var input2 = false;
function clickResult() {
    window.location.href = 'resultMulti.html';
    a = Number(eval(document.getElementById("num1").value));
    b = Number(eval(document.getElementById("num2").value));
    // a = eval(document.getElementById("num1").value);
    // b = eval(document.getElementById("num1").value);
    // if(a == 'Infinity' || b == 'Infinity') {
    //     document.getElementById
    // }
    kqua = String(a*b);
    localStorage.setItem("in ra man hinh", kqua);
}
function deleteEle() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
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
// function focus1() {
//     document.getElementById('num1').input1.addEventListener('click',function() {input1 = true; input2 = false;});
// }
// function focus2() {
//     document.getElementById('num2').input2.addEventListener('click',function() {input1 = false; input2 = true;});
// }

function clickInput(value) {
    if(input1 === true) {
        document.getElementById("num1").value += value;
    } else if (input2 === true) {
        document.getElementById("num2").value += value;
    }
}