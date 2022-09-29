let num1 = 0;
let opt = 0;

function solve(i) {
    let a = parseFloat(document.getElementById('mdisp').innerHTML.slice(opt + 1, document.getElementById('mdisp').innerHTML.length - 1));
    let c = opt;
    let eqn = document.getElementById("mdisp").innerHTML;
    if (eqn[c] == "+") num1 += a;
    else if (eqn[c] == "-") num1 -= a;
    else if (eqn[c] == "/") num1 /= a;
    else if (eqn[c] == "*") num1 *= a;
    opt=i;
    console.log(num1);
    document.getElementById("mdisp").innerHTML = num1;
}

function disp(i) {
    if (!Number.isInteger(i) && opt == 0) {
        num1 = parseFloat(document.getElementById("mdisp"));
        opt = i;
    } else if (opt != 0) {
        solve(i);
    } else {
        if (document.getElementById("mdisp").innerHTML.length < 17) {
            document.getElementById("mdisp").innerHTML += i;
        } else if (document.getElementById("mdisp").innerHTML.length < 25) {
            let j = document.getElementById("mdisp").innerHTML.length - 16;
            document.getElementById("mdisp").innerHTML += i;
            document.getElementById("display").style.fontSize = 35 - 1.7 * j + "px";
        }
    }
}

function del() {
    let content = document.getElementById("mdisp").innerHTML;
    let len = content.length;
    if (len < 17) {
        document.getElementById("display").style.fontSize = "35px";
        document.getElementById("mdisp").innerHTML = content.slice(0, len - 1);
    } else {
        let j = 25 - document.getElementById("mdisp").innerHTML.length;
        document.getElementById("display").style.fontSize = 23.8 + 1.5 * j + "px";
        document.getElementById("mdisp").innerHTML = content.slice(0, len - 1);
    }
}


