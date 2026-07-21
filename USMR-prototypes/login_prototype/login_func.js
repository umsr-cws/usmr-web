import { getCookie } from '../cookies_prototype/cookies.mjs';
const SubmitButOn = document.getElementById("btn");
const counter = document.getElementById("displayCount");
const dispData = document.getElementById("displayInfo");
const username = document.getElementById("username");
const password = document.getElementById("password");

let count = 0;
let userName = getCookie("UserName");
let passWord = getCookie("PassWord");

console.log(userName, passWord);
function func(){
	dispData.innerText = "Login Failed "+username.value+":"+password.value;
    if(count>2){
        document.write("Failed: Too many try's");
    }
    if(username.value==userName&&password.value==passWord)
    {
    	document.location='../postlogin_prototype/postLogin.html';
    }
    if (username.value.trim() == "" || password.value.trim() == "") {
    	dispData.innerText = "One or more inputs are empty";
        count--;
	}
}


function countClicks() {
	count++;
	counter.textContent = count;
}


SubmitButOn.addEventListener('click',func);
SubmitButOn.addEventListener('click',countClicks);