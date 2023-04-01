var num1,num2;
var result1;
var result2;
var kqua;

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
    kqunum1= result1*result2;
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
