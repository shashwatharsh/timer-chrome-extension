let hr1 = document.querySelector('.hr1');
let hr2 = document.querySelector('.hr2');

let msec = ((hr1 * 10) + hr2) * 60 * 60;

let min1 = document.querySelector('.min1');
let min2 = document.querySelector('.min2');

msec = msec + ((min1 * 10) + min2) * 60;

var sec1 = document.getElementsByClassName('sec1');
let sec2 = document.querySelector('.sec2');

// let is1 = document.getElementById('is1').textContent = "9";
// let is2 = document.getElementById('is2').event.target.value;
// console.log(is1);

msec = msec + ((sec1 * 10) + sec2);

reset = () => {
    let r = document.querySelector('.resetm').style.display = "block";
}

btn = () => {
    setTimeout(fun = () => {
        console.log('hello');
        // console.log(sec1.innerHTML);
        sec2.innnerHTML = '7';
    }, 1000);
}