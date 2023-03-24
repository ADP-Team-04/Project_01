var a,b;
var kqua;
function clickResult() {
    window.location.href = 'resultMulti.html';
    a = Number(eval(document.getElementById("num1").value));
    b = Number(eval(document.getElementById("num2").value));
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