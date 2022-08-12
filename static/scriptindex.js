setInterval(() => {
    document.getElementById('time').innerHTML=new Date();
}, 1000);
function m(){
    let n = prompt("What's your name?","Guest");
    alert(`Hi! ${n}, please! Explore all the tabs & fill the form on Book Now page.Have a nice day!`);
}
setTimeout(m,4000);