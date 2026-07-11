const statusMessage = document.getElementById("message");
let Users = ["lotanhe"];
let pass = ["piper"];
function Userexists(){
	for(let i = 0; i<Users.length; i++){
    	if(Users[i] == username.value){
            return false;
            console.log(Users[i]);
            }
    }
    return true;
}
function CheckPassword(){
	if(passcheck.value == password.value && password.value != ""){
    	return true;
    }
    else{
    	statusMessage.innerText = "Please reinput the password";
        return false;
    }
}
function addUser(){
	if(Userexists() & CheckPassword()){
		Users.push(username.value);
    	pass.push(password.value);
        statusMessage.innerText = "User created. please proceed to logon page";
    }
    else if(username.value == ""){
    	statusMessage.innerText = "please add a name";
    }
    else if(password.value == ""){
    	statusMessage.innerText = "please add a password";
    }
    else if(!CheckPassword()){
    	statusMessage.innerText = "please reinput the password"
    }
    else{
    	statusMessage.innerText = "User exists";
    }
}