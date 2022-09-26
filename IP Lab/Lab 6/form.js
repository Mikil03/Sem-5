function grade()
{
    let m = document.getElementById('marks1').value;
    if(m>100 || m<0)
    {
        document.getElementById('marks1').value = "";
        //document.write("Enter marks in range of 0 to 100!");
        alert("Enter marks in range of 0 to 100!");
    }
    else if(m>90)
    {
        alert("Grade O!");
    }
    else if(m>80)
    {
        alert("Grade A!");
    }
    else if(m>70)
    {
        alert("Grade B!");
    }
    else if(m>60)
    {
        alert("Grade C!");
    }
    else if(m>50)
    {
        alert("Grade D!");
    }
    else
    {
        alert("Grade F!");
        // document.body.style.backgroundColor = "red";
        // document.body.style.color = "white";
    }
}