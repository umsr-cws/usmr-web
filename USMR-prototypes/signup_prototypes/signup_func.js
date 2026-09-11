import { makeCookie } from '../cookies_prototype/cookies.mjs';
import mysql from 'mysql2/promise';

const statusMessage = document.getElementById("message");
const submit = document.getElementById("submitBtn");
const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'server',
    database: 'Accounts',
    password: 'GerAntique3',
  });

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
function MakeUserSQL(user, passkey){
    try{
    connection.query(
    "INSERT INTO Users VALUES ('?', '?');",
    [user, passkey]
  );
    }
    catch(err){

    }
}
submit.onclick = () => {
	if(Userexists() & CheckPassword()){
		Users.push(username.value);
    	pass.push(password.value);
        MakeUserSQL(username.value, password.value);
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
