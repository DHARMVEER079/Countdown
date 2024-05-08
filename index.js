const enddate ="2026-05-05T17:17:00"

document.getElementById("end-date").innerText=enddate;

const inputs = document.querySelectorAll("input");


function clock() {
    const end = new Date(enddate)
    const now = new Date()
    
    console.log(end);
    console.log(now);

    const diff= (end - now)/1000; //for converting milisecond into second
    if(diff<0) return;
    console.log(diff);

    //conver into days
    console.log(diff/24/60/60);
    console.log(Math.floor(diff/24/60/60));
    inputs[0].value = Math.floor(diff/24/60/60); //days
    inputs[1].value = Math.floor((diff/60/60)%24); //hours
    inputs[2].value = Math.floor(((diff/60))%60); // minutes
    inputs[3].value = Math.floor((diff)%60); //seconds
    
}

//initial call
clock()


setInterval(() => {
    clock()
    
}, 1000);