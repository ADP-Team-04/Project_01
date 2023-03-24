var a,b;
var kqua;
function clickResult() {
    window.open("http://127.0.0.1:5500/Project_01/Multi-Divi/phep-nhan/result.html","_self");
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
    window.open("http://127.0.0.1:5500/Project_01/Multi-Divi/phep-nhan/phepnhan.html","_self");
}