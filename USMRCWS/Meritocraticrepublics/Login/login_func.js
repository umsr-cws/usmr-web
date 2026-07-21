const SubmitButOn = document.getElementById("btn");
const counter = document.getElementById("displayCount");
const dispData = document.getElementById("displayInfo");
let count = 0;
function func(){
	dispData.innerText = "Login Failed "+username.value+":"+password.value;
    if(count>2){
        document.write("Failed: Too many try's");
    }
    if(username.value=="lotanhe"&&password.value=="piper")
    {
    	document.write("Login Successful");
    }
    if (username.value.trim() == "" || password.value.trim() == "") {
    	dispData.innerText = "One or more inputs are empty";
        count--;
	}
    console.log(username.value, typeof(username.value))
    console.log(password.value, typeof(password.value))
    console.log(nameData, typeof(nameData))
    console.log(passData, typeof(passData))
}
function countClicks() {
	count++;
	counter.textContent = count;
}
SubmitButOn.addEventListener('click',func);
SubmitButOn.addEventListener('click',countClicks);