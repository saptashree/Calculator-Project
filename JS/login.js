function onformSubmission() {
    var email = document.getElementById('emailAdress').value;
    var passWord = document.getElementById('password').value;
    console.log(email);
    console.log(passWord);
    // event.preventDefault();
// validating the Login credentials

if(email && passWord){
    if ((localStorage.getItem('RegistrationPageEmail') == email) && (localStorage.getItem('RegistrationPagePassword') == passWord) ) {
        location.href = "Calculator.html"
    }
    else {
        alert ('Creadentials are not matching');
    }
}
    else{
        alert ('please fill the form');
    }
return false;

}





//     var mail = /[a-z][a-zA-Z0-9._-]{4,}[@][a-z]{5,}[.][. a-z]{3,}/;
//     var pass = /^[a-zA-Z0-9]{8,12}$/;

//     if (mail.test(email)){
//         document.getElementById('emailHelp').innerHTML="";
//     }
//     else{
//         document.getElementById('emailHelp').innerHTML="enter valid email";
//     }

//     if (pass.test(passWord)){
//         document.getElementById('passwordHelp').innerHTML="";

//     }
//     else{
//         document.getElementById('passwordHelp').innerHTML="enter valid password";

//     }
     
    
// if (mail.test(email) && pass.test(passWord)){
//     window.location.href = "Calculator.html";

// }

// }