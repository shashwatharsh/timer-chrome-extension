let hr1 = document.querySelector('span.hr1');
let hr2 = document.querySelector('span.hr2');
let msec = ((hr1*10)+hr2)*60*60;
let min1 = document.querySelector('span.min1');
let min2 = document.querySelector('span.min2');
msec = msec+ ((min1*10)+min2)*60;
var sec1 = document.getElementsByClassName('sec1').textContent = '7';
let sec2 = document.querySelector('span.sec2');
let is1 = document.getElementById('is1').textContent = "9";
console.log(sec1);
msec = msec + ((sec1*10)+sec2);
console.log();
let sec = 
btn = () => {
    setTimeout(fun = () =>{
        console.log('hello');
        // console.log(sec1.innerHTML);
        sec2.innnerHTML = '7';
    }, 1000 );
}