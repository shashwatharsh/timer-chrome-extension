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

// var for checking that the value is entered by user or not 
let chcek_stat = false;
reset = () => {
    let r = document.querySelector('.resetm').style.display = "block";
    controls_check();
}

cancel_reset = () => {
    let r = document.querySelector('.resetm').style.display = "none";
    controls_check();
}

controls_check = () =>{
    let contr = document.querySelector('.controls_btn');
    if(contr.style.display === "none"){
        contr.style.display = "block";
    }
    else{
        contr.style.display = "none";
    }
 }
 let value_after_last = 0;
 let value_min_sec = 0;
let value_hr = 0;
let rsec =0;
let rmin =0;
let brmin = false;
submitfun = () => {
    let r = document.querySelector('.resetm').style.display = "none";
    controls_check();
    chcek_stat = true;
     rsec = document.getElementById('rsec').value;
    rsec = parseInt(rsec, 10);
    console.log(rsec);
    brmin = true;
    rmin = document.getElementById('rmin').value;
    rmin = parseInt(rmin, 10);
    console.log("here rmin = "+rmin);
    let rhour = document.getElementById('rhour').value;
    rhour = parseInt(rhour, 10);
    value_after_last = rsec + (60*rmin)+(60*60*rhour); 
    // console.log(document.getElementById('rsec').value);
    console.log(value_after_last);
    value_min_sec = ((60*rhour)+rmin);
    value_hr = rhour;
    document.getElementById('ih2').innerHTML = value_hr;
    document.getElementById('im2').innerHTML = rmin;
    document.getElementById('is2').innerHTML = rsec;
    document.getElementById('ih1').style.display = "none";
    document.getElementById('im1').style.display = "none";
    document.getElementById('is1').style.display = "none";
}
console.log(value_after_last);

btn = () => {
    if(brmin === false){
        rsec =5;
        rmin =0;
        value_hr =0;
        console.log('gg');
    }
   let int =  setInterval(fun = () => {
        // console.log('hello');
        // console.log(rsec);
        // console.log(sec1.innerHTML);
        rsec = rsec - 1;
        if(rsec === -1){
            document.getElementById('is2').innerHTML = 0;
            console.log('kk');
        }
        document.getElementById('is2').innerHTML = rsec;
        console.log("after rmin "+rmin);
        console.log("after rsec in set "+rsec);
        if(rsec < 0){
            console.log(rmin);
                console.log(rsec);
            if(rmin>0){
                console.log(rmin);
                console.log(rsec);
                rmin = rmin -1;
                document.getElementById('im2').innerHTML = rmin;
                rsec = 60;
                document.getElementById('is2').innerHTML = rsec;
            }
            else{
                if(value_hr > 0){
                    value_hr = value_hr -1;
                    document.getElementById('ih2').innerHTML = value_hr;
                    rmin = 59;
                    document.getElementById('im2').innerHTML = rmin;
                    rsec = 60;
                    document.getElementById('is2').innerHTML = rsec;
                }
                else{
                    clearInterval(int);
                }
            }
           
        }
    }, 1000);
}

// Copied form inter net 
function isNumberKey(evt)
{
var charCode = (evt.which) ? evt.which : event.keyCode
if (charCode > 31 && (charCode < 48 || charCode > 57))
return false;

return true;
}