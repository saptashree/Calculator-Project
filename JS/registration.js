function Registration(){
    var name = document.getElementById('yourname').value;
    var number = document.getElementById('yournumber').value;
    var email = document.getElementById('youremail').value;
    var pwd = document.getElementById('yourpwd').value;
    var confirm_pwd = document.getElementById('confirm_pwd').value;

// console.log(email,pwd);

     var mail = /[a-z][a-zA-Z0-9._-]{4,}[@][a-z]{5,}[.][. a-z]{3,}/;

var password = /[a-z][a-z#$%&@0-9]{8,}/;
var mobile = /[6-9][0-9]{9}/;

localStorage.setItem('RegistrationPageEmail',email);
localStorage.setItem('RegistrationPagePassword',pwd);


if(mail.test(email)){
    if(password.test(pwd)){
        if(pwd == confirm_pwd){
            if(mobile.test(number)){
                alert('Registration Succcessfull');
                window.location.href="login.html";

            }
            else{
                document.getElementById('numberHelp').innerHTML="error in number";
            }
        }
        else{
            alert('Password dont match');
        }
    }
    else{
         document.getElementById('passwordHelp').innerHTML="error in password";
    }
}
else{
    document.getElementById('emailHelp').innerHTML="error in email";
}
  


 



return false;

}
