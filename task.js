//
// Task :  1. click a button and show the content with 60px fontSize and bgColor red and bordeRadius 50%   
//  2. click the button and display three images on clicking the button ft img should be of border radius 30px , 
//  second img should be border radius 100px , third img should be of borderradius 50%


//task-1

var k=document.getElementById("p");
let d=document.getElementById("btn");

function b(){
    k.style.fontSize="60px"
    k.style.backgroundColor="red"
    // k.style.display="inline"
    k.style.borderRadius="50%"
    k.textContent="radhakrishna " 
    k.style.textAlign="center"

}

//task-2
var a=document.getElementById("para");
var t=document.getElementById("buttton")
function z(){
a.style.borderRadius="30px"
a.style.backgroundColor="lightgrey"
a.style.display="block"
a.innerHTML=` <img src="https://tse1.mm.bing.net/th?id=OIP.wyHuMqg_q5cOejNcXxG86gHaE7&pid=Api&P=0&h=180" style="border-radius:30px"/>
<img src="https://tse1.mm.bing.net/th?id=OIP.J9sfzSNX-OJxedkKslhaXAHaE7&pid=Api&P=0&h=180" style="border-radius:100px"/>
<img src="https://tse4.mm.bing.net/th?id=OIP.Wm8ow4v1pCv-6HxBsy7F_AHaEo&pid=Api&P=0&h=180" style="border-radius:50%"/>`}


