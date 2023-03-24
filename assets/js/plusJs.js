var a,b;
var result;
function clickResult() {
    a = Number(eval(document.getElementById("num1").value));
    b = Number(eval(document.getElementById("num2").value));
    result = String(a+b);
}
function deleteEle() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}