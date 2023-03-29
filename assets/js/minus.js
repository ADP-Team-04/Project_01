var x,y,minus;
var tempX,tempY;
var time = 0;
var timesOpposite1 = 0;
var timesOpposite2 = 0;
var input1,input2 = false;
function clickResult(){  
    document.getElementById("alert-error1").innerHTML = '&emsp;';
    document.getElementById("alert-error2").innerHTML = '&emsp;';
    check = true;
    x = document.getElementById("num1").value.trim();
    y = document.getElementById('num2').value.trim();
    console.log(x);
    console.log(y);
    if(x=== "") {
        check = false;
        document.getElementById("alert-error1").innerHTML = '*Vui lòng không để trống';
    }
    if(y=== "") {
        check = false;
        document.getElementById("alert-error2").innerHTML = '*Vui lòng không để trống';
    }
    try {
        tempX = new Function('return ' + x)();
     } catch (err) {
        document.getElementById("alert-error1").innerHTML = 'Không đúng định dạng số';
        check = false;
        try {
            tempY = new Function('return ' + y)();
         } catch (err) {
            document.getElementById("alert-error2").innerHTML = "Không đúng định dạng số";
         }
     }
     try {
        tempY = new Function('return ' + y)();
     } catch (err) {
        document.getElementById("alert-error2").innerHTML = 'Không đúng định dạng số';
        check = false;
     }
     minus = tempX - tempY ;
     console.log(minus);
     localStorage.setItem("Input", minus); 
    if(check) {
        window.location.href = 'resultMinus.html';
    }
}
function deleteEle(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("alert-error1").innerHTML = '&emsp;';
    document.getElementById("alert-error2").innerHTML = '&emsp;';
    
}
function deleteOneEle(){
    let tmp;
    if(input1 === true) {
        tmp = document.getElementById("num1").value;
        tmp = tmp.slice(0,tmp.length - 1);
        document.getElementById("num1").value  = tmp;
        console.log(tmp);
    } else if (input2 === true) {
        tmp = document.getElementById("num2").value;
        tmp = tmp.slice(0, tmp.length - 1);
        document.getElementById("num2").value  = tmp;
        console.log(tmp);
    }
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
function dropKeyBoard() {
    time++;
    console.log(document.querySelector(".button"));
    var board =document.querySelector(".keyboard-table-box");
    let button = document.querySelector(".button");
    button.classList.toggle("isHiden");
    // var but1 = document.getElementById("back-click");
    // var but2 = document.getElementById("result-click");
    // var but3 = document.getElementById("delete-click");
    var minusBox = document.getElementById("idToAdd");
    if(time%2 != 0) {   
        board.style = "display: block;";
        // but1.style = "visibility: hidden;";
        // but2.style = "visibility: hidden;";
        // but3.style = "visibility: hidden;";
        // minusBox.style = "padding-bottom: 170px;"+
        // " background: linear-gradient(180deg, rgb(65,62,62) 20%, rgb(65,62,62) 35%, rgb(174,198,144) 20%, rgb(174,198,144) 20%, rgb(174,198,144) 20%);"      
    } else {
        board.style = "display:none";
        // but1.style = "visibility: visible;";
        // but2.style = "visibility: visible;";
        // but3.style = "visibility: visible;";
        // minus.style = "padding-bottom: 35px;"
    }
}

function opposite() {
    var tmp1 = document.getElementById("num1").value;
    var tmp2 = document.getElementById("num2").value;
    if(input1 === true) {
        timesOpposite1 = timesOpposite1 + 1;
        if(timesOpposite1 % 2 != 0) {
            console.log(tmp1);
            tmp1 = "-(" + tmp1 + ")";
            console.log(tmp1);
            document.getElementById("num1").value  = tmp1;
        } else {
            tmp1 = tmp1.slice(2,tmp1.length-1);
            document.getElementById("num1").value  = tmp1;
        }
    } else if (input2 === true) {
        timesOpposite2 = timesOpposite2 + 1;
        if(timesOpposite2 % 2 != 0) {
            tmp2 = "-("+tmp2+")";
            document.getElementById("num2").value  = tmp2;
        } else {
            tmp2 = tmp2.slice(2,tmp2.length-1);
            document.getElementById("num2").value  = tmp2;
        }
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
        value1 = new Function('return ' + x)();
     } catch (err) {
        document.getElementById("alert-error1").innerHTML = '*Không đúng định dạng số';
        try {
            value2 = new Function('return ' + y)();
         } catch (err) {
            document.getElementById("alert-error2").innerHTML = "*Không đúng định dạng số";
         }
     }
}

