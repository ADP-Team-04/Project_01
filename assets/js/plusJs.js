var num1,num2;
var result1;
var result2;
var kqua;
var times = 0;
var input1 = false;
var input2 = false;
var nofalse = true;
var timesOpposite1 = 0;
var timesOpposite2 = 0;
function clickResult() {
    document.getElementById("alert-error1").innerHTML = '&emsp;';
    document.getElementById("alert-error2").innerHTML = '&emsp;';
    nofalse = true;
    num1= document.getElementById("num1").value.trim();
    num2= document.getElementById('num2').value.trim();
    console.log(num1);
    console.log(num2);
    if(num1 === "" ) {
        nofalse = false;
        document.getElementById("alert-error1").innerHTML = '*Please do not leave it blank';
    }
    if(num2 === "" ) {
        nofalse = false;
        document.getElementById("alert-error2").innerHTML = '*Please do not leave it blank';
    }
    try {
        result1 = new Function('return ' + num1)();
     } catch (err) {
        document.getElementById("alert-error1").innerHTML = '*please enter again';
        nofalse = false;
        try {
            result2 = new Function('return ' + num2)();
         } catch (err) {
            document.getElementById("alert-error2").innerHTML = "*please enter again";
         }
     }
     try {
        result2 = new Function('return ' + num2)();
     } catch (err) {
        document.getElementById("alert-error2").innerHTML = '*please enter again';
        nofalse = false;
     }
    if(nofalse) {
        window.location.href = 'resultplus.html';
    }
    kqua= result1+result2;
    console.log(kqua);
    localStorage.setItem("in", kqua);
}
function deleteEle() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
function clickreturn(){
    window.location.href = 'index.html';
}
function clickContinue(){
    window.location.href = 'plus.html';
}
function clickCopy(){
    let text = document.getElementById|('result-out').value;
    navigator.clipboard.writeText(text);
    alert('Result is copied')
}
function show_keyboard() {  
    times++;
    var board =document.getElementById("table-board-box");
    var but1 = document.getElementById("return-click");
    var but2 = document.getElementById("result-click");
    var but3 = document.getElementById("delete-click");
    var plusbox = document.getElementById("idToAdd");
    var keyboard= document.getElementById("keyboard")
    if(times%2 != 0) {   
        board.style.cssText = "display: block; animation: fadeOut 0.65s forwards;";
        but1.style.cssText = "visibility: hidden;";
        but2.style.cssText = "visibility: hidden;";
        but3.style.cssText = "visibility: hidden;";
        plusbox.style.cssText = "padding-bottom: 170px;"+
        " background: linear-gradient(180deg, rgb(65,62,62) 20%, rgb(65,62,62) 35%, rgb(174,198,144) 20%, rgb(174,198,144) 20%, rgb(174,198,144) 20%);"    
        
    } else {
        board.style.cssText = "display:none";
        but1.style.cssText = "visibility: visible;";
        but2.style.cssText = "visibility: visible;";
        but3.style.cssText = "visibility: visible;";
        plusbox.style.cssText = "padding-bottom: 35px;"
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
function deleteOneElement() {
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