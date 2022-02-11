var nowDate = new Date();
var year = nowDate.getFullYear();
// var year = 2022; //테스트시 사용
var htmlHour = document.getElementById("hour"); 
var htmlYear = document.getElementById("year");


htmlYear.innerHTML=year + "년"; //년도 띄우기

function getTime() {
    var nowDate = new Date();

    const month = nowDate.getMonth();
    const clockDate = nowDate.getDate();
    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();
    const seconds = nowDate.getSeconds();
    htmlHour.innerText = `${month+1}월 ${clockDate}일 ` +
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;
    
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init()