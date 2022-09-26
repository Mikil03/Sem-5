function disp(i){
    if(document.getElementById('mdisp').innerHTML.length<17){
        document.getElementById('mdisp').innerHTML += i;
    }
    else if(document.getElementById('mdisp').innerHTML.length<25){
        let j=document.getElementById('mdisp').innerHTML.length-16;
        document.getElementById('mdisp').innerHTML += i;
        document.getElementById('display').style.fontSize = 35-1.7*j + 'px';
    }
}

function del(){
    let content = document.getElementById('mdisp').innerHTML;
    let len = content.length;
    if(len<17){
        document.getElementById('display').style.fontSize = '35px';
        document.getElementById('mdisp').innerHTML = content.slice(0,(len-1));
    }
    else{
        let j=25 - document.getElementById('mdisp').innerHTML.length;
        document.getElementById('display').style.fontSize = 23.8+1.5*j + 'px';
        document.getElementById('mdisp').innerHTML = content.slice(0,(len-1));
    }
}

function solve(){
    let a,b,c=-1;
    let eqn = document.getElementById('mdisp').innerHTML;
    for(let i=0;i<eqn.len;i++)
    {
    }
}