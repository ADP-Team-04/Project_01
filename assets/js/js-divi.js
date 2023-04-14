//declare variable
var expr1, expr2;
var result1;
var result2;
var kqua;
var times = 0;
var input1 = false;
var input2 = false;
var nofalse = true;
var timesOpposite1 = 0;
var timesOpposite2 = 0;

//back to menu page
function backToMenu() {
    window.location.href = "index.html";
}

//calculate and print result on result's page
function clickResult() {
    //Use regex to check input data
    var regex = /^[a-zA-Z]+$/;
    var regex = /[^\d +*/().-]/;
    var t = /^[\/*]/;
    var div0 = /\/0/;

    //Refresh error message box
    document.getElementById("alert-error1").innerHTML = '&emsp;';
    document.getElementById("alert-error2").innerHTML = '&emsp;';

    // Reconfirm no errors by assigning variable nofalse = true
    // This step is important because 'nofalse' variable will be changed globally
    nofalse = true;

    //Get input from the user
    expr1 = document.getElementById("num1").value.trim();
    expr2 = document.getElementById('num2').value.trim();

    //Conduct data validation and report errors in the error message box if necessary
    if (expr1.match(regex) || expr1.match(t) || expr1.match(div0)) {
        document.getElementById("alert-error1").innerHTML = '*Please enter again';
        nofalse = false;
    }
    if (expr2.match(regex) || expr2.match(t) || expr2.match(div0)) {
        document.getElementById("alert-error2").innerHTML = '*Please enter again';
        nofalse = false;
    }
    if (expr1 === '') {
        nofalse = false;
        document.getElementById("alert-error1").innerHTML = '*Please do not leave it blank';
    }
    if (expr2 === '') {
        nofalse = false;
        document.getElementById("alert-error2").innerHTML = '*Please do not leave it blank';
    }
    if(!nofalse) {
        return;
    }
    try {
        result1 = new Big(new Function('return ' + expr1)());
        console.log("result     " + result1);
    } catch (err) {
        document.getElementById("alert-error1").innerHTML = '*Please enter again';
        nofalse = false;
        try {
            result2 = new Big(new Function('return ' + expr2)());
            console.log(result2);
            if (result2 == 0) {
                document.getElementById("alert-error2").innerHTML = '*Please do not enter the value 0';
                nofalse = false;
            }
        } catch (err) {
            document.getElementById("alert-error2").innerHTML = '*Please enter again';
        }
    }
    try {
        result2 = new Big(new Function('return ' + expr2)());
        if (result2 == 0) {
            document.getElementById("alert-error2").innerHTML = '*Please do not enter the value 0';
            nofalse = false;
        }
    } catch (err) {
        document.getElementById("alert-error2").innerHTML = '*Please enter again';
        nofalse = false;
    }

    //Calculate the result
    kqua = result1.div(result2);
    console.log(kqua);
    //If no error occurs, print the result box on the results page
    if (nofalse) {
        window.location.href = 'resultDivi.html';
    }
    localStorage.setItem("in ra ket qua", kqua);
}

//create the opposite value with the old value
function opposite() {
    //Get input from the user
    var tmp1 = document.getElementById("num1").value;
    var tmp2 = document.getElementById("num2").value;
    /* This algorithm is used to determine when to add/delete the character '-(' 
    before the value and the character ')' after the value. */
    if (input1 === true) {
        timesOpposite1 = timesOpposite1 + 1;
        if (timesOpposite1 % 2 === 0 && tmp1.charAt(tmp1.length - 1) === ')') {
            console.log(timesOpposite1);
            tmp1 = tmp1.slice(2, tmp1.length - 1);
            document.getElementById("num1").value = tmp1;
        } else if (timesOpposite1 % 2 != 0 && tmp1.charAt(tmp1.length - 1) != ')') {
            console.log(timesOpposite1);
            tmp1 = "-(" + tmp1 + ")";
            document.getElementById("num1").value = tmp1;
        } else if (tmp1.charAt(tmp1.length - 1) === ')') {
            console.log(timesOpposite1);
            tmp1 = tmp1.slice(2, tmp1.length - 1);
            document.getElementById("num1").value = tmp1;
        } else {
            console.log(timesOpposite1);
            tmp1 = "-(" + tmp1 + ")";
            document.getElementById("num1").value = tmp1;
        }
    } else if (input2 === true) {
        timesOpposite2 = timesOpposite2 + 1;
        if (timesOpposite2 % 2 === 0 && tmp2.charAt(tmp2.length - 1) === ')') {
            console.log(timesOpposite2);
            tmp2 = tmp2.slice(2, tmp2.length - 1);
            document.getElementById("num2").value = tmp2;
        } else if (timesOpposite2 % 2 != 0 && tmp2.charAt(tmp2.length - 1) != ')') {
            console.log(timesOpposite2);
            tmp2 = "-(" + tmp2 + ")";
            document.getElementById("num2").value = tmp2;
        } else if (tmp2.charAt(tmp2.length - 1) === ')') {
            onsole.log(timesOpposite2);
            tmp2 = tmp2.slice(2, tmp2.length - 1);
            document.getElementById("num2").value = tmp2;
        } else {
            console.log(timesOpposite2);
            tmp2 = "-(" + tmp2 + ")";
            document.getElementById("num2").value = tmp2;
        }
    }
}

//To delete just 1 character
function deleteOneElement() {
    let tmp;
    if (input1 === true) {
        tmp = document.getElementById("num1").value;
        tmp = tmp.slice(0, tmp.length - 1);
        document.getElementById("num1").value = tmp;
        console.log(tmp);
    } else if (input2 === true) {
        tmp = document.getElementById("num2").value;
        tmp = tmp.slice(0, tmp.length - 1);
        document.getElementById("num2").value = tmp;
        console.log(tmp);
    }
}

// To delete all and refresh error message boxes.
function deleteAll() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("alert-error1").innerHTML = '&emsp;';
    document.getElementById("alert-error2").innerHTML = '&emsp;';
}

// back to division page
function exitResult() {
    window.location.href = 'divi.html';
}

//drop down and scroll up virtual keyboard.
function dropKeyBoard() {
    times++;
    var board = document.getElementById("table-board-box");
    var but1 = document.getElementById("back-click");
    var but2 = document.getElementById("result-click");
    var but3 = document.getElementById("delete-click");
    var multiBox = document.getElementById("idToAdd");
    if (times % 2 != 0) {
        board.style.cssText = "display: block; animation: fadeOut 0.65s forwards;";
        but1.style.cssText = "visibility: hidden;";
        but2.style.cssText = "visibility: hidden;";
        but3.style.cssText = "visibility: hidden;";
        multiBox.style.cssText = "padding-bottom: 170px;" +
            " background: linear-gradient(180deg, rgb(65,62,62) 20%, rgb(65,62,62) 35%, rgb(174,198,144) 20%, rgb(174,198,144) 20%, rgb(174,198,144) 20%);"
    } else {
        board.style.cssText = "display:none";
        but1.style.cssText = "visibility: visible;";
        but2.style.cssText = "visibility: visible;";
        but3.style.cssText = "visibility: visible;";
        multiBox.style.cssText = "padding-bottom: 35px;"
    }
}

function clickInput(value) {
    if (input1 === true) {
        document.getElementById("num1").value += value;
    } else if (input2 === true) {
        document.getElementById("num2").value += value;
    }
}

function copy() {
    let text = document.getElementById('result-last').value;
    navigator.clipboard.writeText(text);
    document.getElementById("copy").innerHTML = "Copied";
    var copybtn = document.getElementById("copy");
    copybtn.style.cssText = "background-color: #2ecc71;" +
        "transition: background-color 0.2s;";
}
function backPrevious() {
    window.history.back();
}
