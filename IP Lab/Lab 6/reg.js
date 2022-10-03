function check() {
  let no = document.getElementById("pno").value;
  const pnum = /^[0-9]{10,10}$/;
  if (!pnum.test(no)) {
    alert("Enter a valid number!");
  }
  let id = document.getElementById("mail").value;
  const mid = /([a-zA-Z0-9,_\.]+)@([a-zA-Z0-9]{2,3})(.com$)/;
  if (!mid.test(id)) {
    alert("Enter valid email!");
  }

  const psd =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let pswd = document.getElementById("pass").value;
  console.log(pswd);
  if (!psd.test(pswd)) {
    alert("Enter a valid password!");
  }
}
