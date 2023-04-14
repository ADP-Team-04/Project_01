var x,y,minus;
var tempX,tempY;
var time = 0;
var timesOpposite1 = 0;
var timesOpposite2 = 0;
var input1,input2 = false;
// get number, input errors and function minus
function clickResult(){  
    document.getElementById("alert-error1").innerHTML = '&emsp;';
    document.getElementById("alert-error2").innerHTML = '&emsp;';
    check = true;
    x = document.getElementById("num1").value.trim();
    y = document.getElementById('num2').value.trim();
    console.log(x);
    console.log(y);
    var regex=/[^\d +*/().-]/;
    var t =/^[\/*]/;
    var div0 =/\/0/;
    x = x.replaceAll(" ",''); 
    y = y.replaceAll(" ",''); 
    console.log(x)
    if(x=== "") {
        check = false;
        document.getElementById("alert-error1").innerHTML = '*Please do not leave it blank';
    }
    if(y=== "") {
        check = false;
        document.getElementById("alert-error2").innerHTML = '*Please do not leave it blank';
    }
    if(regex.test(x) == true || t.test(x)|| div0.test(x)){
        document.getElementById("alert-error1").innerHTML = 'Please enter again';
        check = false;
    }
    if(regex.test(y) == true || t.test(y)|| div0.test(y)){
        document.getElementById("alert-error2").innerHTML = 'Please enter again';
        check = false;
    }
    
    try{
        tempX = new Function('return ' + x)();
    }catch (err){
        document.getElementById("alert-error1").innerHTML = 'Please enter again';
        check = false;
        try{
            tempY = new Function('return ' + y)();
        }catch (err){
            document.getElementById("alert-error2").innerHTML = 'Please enter again';
            check = false;
        }
    }
    try{
        tempY = new Function('return ' + y)();
    }catch(err){
        document.getElementById("alert-error2").innerHTML = 'Please enter again';
        check = false;
    }
    if(check) {
        window.location.href = 'resultMinus.html';
    }
    // shorten the number
    minus = (tempX - tempY).toFixed(2) ;
    console.log(minus);
    localStorage.setItem("Input", minus); 
    
}
// delete all number input number
function deleteEle(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("alert-error1").innerHTML = '&emsp;';
    document.getElementById("alert-error2").innerHTML = '&emsp;';
    
}
// input one number
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
// return index
function exitResult(){
    window.location.href= 'index.html';
}
// return index
function exitMinus(){
    window.location.href = 'index.html';
}
// return to minus function 
function countinueResult(){
    window.location.href= 'minus.html';
}
// copy the result just done
function copyResult(){
    let text = document.getElementById('result-last').value;
    navigator.clipboard.writeText(text);
    document.getElementById("copy").innerHTML = "Copied";
    var copybtn = document.getElementById("copy");
    copybtn.style.cssText = "background-color: #2ecc71;"+
    "transition: background-color 0.2s;";
}
// open keyboard
function dropKeyBoard() {
    time++;
    console.log(document.querySelector(".button"));
    var board =document.querySelector(".keyboard-table-box");
    let button = document.querySelector(".button");
    button.classList.toggle("isHiden");

    var minusBox = document.getElementById("idToAdd");
    if(time%2 != 0) {   
        // board.style = "display: block;";
        board.style.cssText = "display: block; animation: fadeOut 0.65s forwards;";
        minusBox.style.cssText = "padding-bottom: 170px;"+" background: linear-gradient(180deg, rgb(65,62,62) 20%, rgb(65,62,62) 35%, rgb(174,198,144) 20%, rgb(174,198,144) 20%, rgb(174,198,144) 20%);";
    } else {
        board.style = "display:none";
    }
}
// input number
function clickInput(value) {
    if(input1 === true) {
        document.getElementById("num1").value += value;
    } else if (input2 === true) {
        document.getElementById("num2").value += value;
    }
}
// create the opposite value with the old value
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
// error left blank
function catchException(value1,value2) {
    try {
        value1 = new Function('return ' + x)();
     } catch (err) {
        document.getElementById("alert-error1").innerHTML = '*Please do not leave it blank';
        try {
            value2 = new Function('return ' + y)();
         } catch (err) {
            document.getElementById("alert-error2").innerHTML = "*Please do not leave it blank";
         }
     }
}

