let a,b;
let kq1;
let kq2;

document.getElementById("cal").onclick = function() {
    a = Number(eval(document.getElementById("num1").value));
    b = Number(eval(document.getElementById("num2").value));
    kq1 = a*b;
    kq2 = a/b;
    document.getElementById("kqua").innerHTML = kq1;
    document.getElementById("kqua-thuong").innerHTML = kq2;
}
document.getElementById("xoa").onclick = function() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("kqua").innerHTML = "";
    document.getElementById("kqua-thuong").innerHTML = "";
}