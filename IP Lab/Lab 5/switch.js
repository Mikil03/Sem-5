function fact(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    // return factorial;
    document.getElementById("ans_fact").value = factorial;
}

function fibo(n) {
    let a = 0;
    let b = 1;
    if (n==0) {
        document.getElementById("ans_fibo").value = 0;
    }
    else if(n==1) {
        document.getElementById("ans_fibo").value = 0;
        document.getElementById("ans_fibo").value =" " + 1;
    }
    else
    {
        document.getElementById("ans_fibo").value = 0;
        document.getElementById("ans_fibo").value = document.getElementById("ans_fibo").value+ " " + 1;
        for (let i = 2; i < n; i++) {
            let c = a + b;
            document.getElementById("ans_fibo").value = document.getElementById("ans_fibo").value + " " +c;
            a = b;
            b = c;
        }
    }
}

function add(a,b)
{
    document.getElementById("ans_add").value = parseInt(a)+parseInt(b);
}

sub = (a,b) =>{
    document.getElementById("ans_sub").value = parseInt(a)-parseInt(b);
}

div = (a,b) =>{
    document.getElementById("ans_div").value = parseInt(a)/parseInt(b);
}

function mul(a,b)
{
    document.getElementById("ans_mul").value = parseInt(a)*parseInt(b);
}