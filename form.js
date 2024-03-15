function validate()
{

 var php=/^[6-9]{1}[0-9]{9}$/
 
 var pv=document.getElementById("num").value
 var uv=document.getElementById("username").value
 var up =/^[A-Za-z]+$/

 if(uv=="")
 {
   document.getElementById("msg").innerHTML="Enter the UserName."
   return false
 }
 if(uv.match(up))
 true;
 else
 {
    document.getElementById("msg").innerHTML="userName should contain alphabets only."
    return false
 }
 if(uv.length<3)
 {
    document.getElementById("msg").innerHTML="userName should contain minimum 3 characters."
    return false
 }
 if(uv.length>10)
 {
    document.getElementById("msg").innerHTML="userName should contain minimum 10 characters."
    return false

 }
 if(pv=="")
 {
    document.getElementById("msg1").innerHTML="Enter the phoneNumber."
    return false
 }
 if(pv.match(php))
 true;
 else
 {
    document.getElementById("msg1").innerHTML="Invalid phoneNumber."
    return false
 }

}