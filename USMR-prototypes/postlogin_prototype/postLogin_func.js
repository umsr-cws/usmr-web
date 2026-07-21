import { getCookie } from '../cookies_prototype/cookies.mjs';
const passContain = document.getElementById("passContainer");
const nameContain = document.getElementById("nameContainer");

nameContain.innerText = "Welcome "+getCookie("UserName");
passContain.innerText = "Your password is: "+getCookie("PassWord");