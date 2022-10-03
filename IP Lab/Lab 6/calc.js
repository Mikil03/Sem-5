while(true){
    let num1 = parseInt(prompt("Enter 1st number:"));
    let num2 =  parseInt(prompt("Enter 2nd number:"));
    let choice = parseInt(prompt("Select operation:\n 1)Addition\n 2)Subtraction\n 3)Multiplication\n 4)Division"));
    switch(choice){
        case 1:
            alert(num1+num2);
            break;

        case 2:
            alert(num1-num2);
            break;

        case 3:
            alert(num1*num2);
            break;

        case 4:
            alert(num1/num2);
            break;
        
        default:
            alert("Select valid operation!");
    }
}