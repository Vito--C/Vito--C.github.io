let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gilrl.JPG') {
        myImage.setAttribute('src', 'images/gilrl2.jpg');
    } else {
        myImage.setAttribute('src', 'images/gilrl.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = '漂亮小仙女是' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '漂亮小仙女是' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = '漂亮小仙女是' + myName;
    }
}