var listUsers = new Array();

function validateRegistration(){
    var correctEntryReg = false;
    var email = document.getElementById("email").value;
    var username = document.getElementById("usrR").value;
    var password = document.getElementById("passwordR").value;

    if(email.length==""){
        alert('You need to enter an email!');
    }else if(username.length==""){
        alert('You need to enter a username!');
    }else if(password.length==""){
        alert('You need to enter a password!');
    }else{
        correctEntryReg=true;
    }
    if(correctEntryReg){
        var user = new User(email,username, password);
        listUsers.push(user);
        //alert(user.getDetails() + " size: " + listUsers.length);
        toLoginPage();
    }else{

    } 
}

function User (email,username, password) {
    this.email = email;
    this.username = username;
    this.password = password;
    this.getEmail = function () {
        return this.email;
    }
    this.getUsername = function () {
        return this.username;
    }
    this.getPassword = function () {
        return this.password;
    }
    this.getDetails = function () {
        return this.email + ", " + this.username + ", " + this.password;
    }
    
}

function validateLogin(){
    var a = document.getElementById("m");
    var username = document.getElementById("usrL").value;
    var password = document.getElementById("passwordL").value;
    var correctEntryLog = false;
    var correctPassword = false;

    if(username.length==""){
        alert('You need to enter your username!');
    }else if(password.length==""){
        alert('You need to enter your password!');
    }else{
        correctEntryLog=true;
    }

    if(correctEntryLog){
        for (i = 0; i < listUsers.length; i++) { 
            if(username == listUsers[i].getUsername() && password == listUsers[i].getPassword()){
                correctPassword = true;
            }
        }
        if(correctPassword){
            a.disabled = false;
            a.placeholder = "Type away...";
            messaging();
        }else{
            alert('Incorrect password or username');
        }
    }else{

    }
    
    
}

function toLoginPage(){
    dontDisplay("regId");
    Display("logId");
}
function toRegPage(){
    dontDisplay("logId");
    Display("regId");
}
function messaging(){
    dontDisplay("logId");
    dontDisplay("regId");
}

function dontDisplay (id) {
    var x = document.getElementById(id);
    x.style.display = "none";
}

function Display (id) {
    var x = document.getElementById(id);
    x.style.display = "block";
}




