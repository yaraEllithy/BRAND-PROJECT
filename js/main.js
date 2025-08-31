



// Start Events

// The end of the year Date
let countDownDate = new Date("Dec 31 , 2030 23:59:59").getTime();
let counter = setInterval(() => {
    // Date now
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow ;

    // Time unites
    // let years = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000));

    // document.querySelector(".years").innerHTML = years < 10 ? `0${years}` : years ;
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days ;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours ;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes ;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds ;

    if( dateDiff < 0){
        clearInterval(counter);
    }
}, 1000);
// End Events

// Start Skills and Stats
let dev = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".prog-holder span");

let StatsSection = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .number");
let started = false;

window.onscroll = function(){
    // skills
    if (window.scrollY >= dev.offsetTop -250){
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }

    // Stats
    if(window.scrollY >= StatsSection.offsetTop -250){
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
}
function startCount(ele) {
    let goal = ele.dataset.goal;  
    let count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == goal) {
            clearInterval(count);
        }
    },2000 / goal)
}

// End Stats

