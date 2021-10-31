

function myLogin() {
    var nameCheck = document.getElementById('userName').value;
    var passCheck = document.getElementById('password').value;
    var userFont = document.getElementById('user_font');
    var passFont = document.getElementById('pass_font');
    var pattern = /^[A-Za-z0-9._]{4,20}$/;

    if (pattern.test(nameCheck)) {

        if (pattern.test(passCheck)) {
            
            document.location.href = "index.html";
            swal("Hello world!");
    
            console.log("abc");
            // alert("User name is correct");
        }
        else {
            // alert ("enter correct username");
            document.getElementById('password').style.marginBottom = '2px'
            passFont.style.paddingBottom = "27px";
            document.getElementById('pass_error').style.display = "block";
            return false;
        }
        console.log("abc");
        // alert("User name is correct");
    }


    else {
        // alert ("enter correct username");
        document.getElementById('userName').style.marginBottom = '2px'
        userFont.style.paddingBottom = "26px";
        document.getElementById('username_error').style.display = "block";
        return false;
    }

}


let user = document.getElementById('userName');
let pass = document.getElementById('password');
let userFont = document.getElementById('user_font');
let passFont = document.getElementById('pass_font');

user.addEventListener('textInput',user_verify);
pass.addEventListener('textInput',pass_verify)


function user_verify(){
    if (user.value.length >= 4) {
        document.getElementById('username_error').style.display = "none";
        userFont.style.paddingBottom = "0px";
        return true;
    }

}

function pass_verify(){
    if (pass.value.length >= 4) {
        document.getElementById('pass_error').style.display = "none";
        // userFont.style.paddingBottom = "0px";
        passFont.style.paddingBottom = "0px";
        return true;
    }

}