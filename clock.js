let display = document.getElementById("numbers");

const showClock = ()=>{
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    display.textContent = `${hour.toString().padStart(2,"0")} : ${minute.toString().padStart(2,"0")} : ${second.toString().padStart(2,"0")}`;
}

setInterval(()=>{
    showClock();
}, 1000);