function validate()
{
    var name=document.getElementById("name").value;
    //var nam=document.getElementById("name");
    var ro=document.getElementById("roll").value;
    var mail=document.getElementById("email").value;
    var ropat=/^\d{2}[A-Z]{3}\d{3}$/;
    var epat=/^[a-z]+\d+@(?:gmail.com|gamil.net|gamil.in)$/
    var pas=document.getElementById("pass").value;
    var cpas=document.getElementById("cpass").value;
    if(name==null||name=="")
    {
        alert("Name should not be empty");
        return false;
    }
    if(ro=="")
    {
        alert("Roll Number Field Is Empty");
        return false;
    }
    if(!ropat.test(ro))
    {
        alert("Enter a Valid Roll Number");
        return false;
    }
    if(mail=="")
    {
        alert("Eamil Field is Empty");
        return false;
    }
    if(!epat.test(mail))
    {
        alert("Enetr a valid Email");
        return false;
    }
    var p=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/
    if(pas=="")
    {
        alert("Enter Your Password");
        return false;
    }
    if(!p.test(pas))
    {
        alert("Use atleat a digit, a special character, a upper and a lower case");
        return false;
    }
    if(cpas=="")
    {
        alert("Confirm Your Password");
        return false;
    }
    if(pas!=cpas)
    {
        alert("Re-check Your Password");
        return false;
    }

}
function myFunction() 
{
    var x = document.getElementById("cpass");
    var s=document.getElementById("sh");
    if (x.type === "password") 
    {
      x.type = "text";
      s.src="C:/Users/praha/Downloads/icons8-eye-30.png";
    } 
    else 
    {
      x.type = "password";
      s.src="C:/Users/praha/Downloads/icons8-closed-eye-30.png";
    }
}
function my()
{
    var y = document.getElementById("pass");
    var s1=document.getElementById("hs");
    if(y.type==="password")
    {
        y.type="text";
        s1.src="C:/Users/praha/Downloads/icons8-eye-30.png";
    }
    else
    {
        y.type="password";
        s1.src="C:/Users/praha/Downloads/icons8-closed-eye-30.png";
    }
}


 