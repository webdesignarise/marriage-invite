let text =document.querySelector('.text');
let text1 =document.querySelector('.text1');
let text2 =document.querySelector('.text2');
let text3 =document.querySelector('.text3');


window.addEventListener('scroll',()=>{
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px'
    text1.style.marginLeft = value * 2.5 + 'px'
    text2.style.marginBottom = value * 2.5 + 'px'
    text3.style.marginRight= value * 2.5 + 'px'

});
const canvas = document.getElementById('scratchCanvas');
const ctx = canvas.getContext("2d");
// const card = document.querySelector(".scratch-card");

function resizeCanvas(){
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height=rect.height * dpr;

    ctx.scale(dpr,dpr);

    ctx.fillStyle ="#999";
    ctx.fillRect(0,0,rect.width,rect.height);

    ctx.fillStyle ="#666";
    ctx.font = "normal 25px sekuya";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("SCRATCH HERE",rect.width / 2 , rect.height / 2);
    
}

resizeCanvas();
window.addEventListener("resize",resizeCanvas);

let scratching = false;
function getPosition(e){
    const rect = canvas.getBoundingClientRect();
    return{
     x : e.clientX - rect.left,
     y : e.clientY - rect.top

    };
}
function scratch(e) {
    if(!scratching) return;
    
    const {x , y}= getPosition(e);

    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();
    ctx.arc(x,y,25,0,Math.PI * 2);
    ctx.fill();
}



canvas.addEventListener("pointerdown",(e) => {
    scratching = true;
    scratch(e);
});

canvas.addEventListener("pointermove",scratch);
canvas.addEventListener("pointerup",() => {
    scratching = false;
});
canvas.addEventListener("pointerleave",() => {
    scratching = false;
});


//countdown

const targetDate = new Date("September 12,2026 23:59:59").getTime();
const countdown = setInterval(function(){
    const now = new Date().getTime();
    const difference = targetDate - now;
    const days = Math.floor(difference / (1000*60*60*24));

    const hours = Math.floor(
        (difference % (1000*60*60*24))/(1000*60*60)
    );
    const minutes = Math.floor(
        (difference % (1000*60*60))/(1000*60)
    );
    const seconds = Math.floor(
        (difference % (1000*60))/1000
    );

    document.getElementById("days").innerHTML = String(days).padStart(2,"0");
    document.getElementById("hours").innerHTML = String(hours).padStart(2,"0");
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2,"0");
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2,"0");

    if (difference < 0){
        clearInterval(countdown);

        document.querySelector(".timer").style.display ="none";
        document.getElementById("message").innerHTML = "The countdown is over!"
    }
},1000)











//section2


let sections = document.querySelectorAll('section');

window.onscroll =() =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    })
}

//tap to open

function openInvitation() {
  document.getElementById("cover").classList.add("open");

  // Confetti
  for (let i = 0; i < 40; i++) {
    createConfetti();
  }
}

function createConfetti() {
  const confetti = document.createElement("div");

  confetti.className = "confetti";

  const emojis = ["🎊", "🎉", "💐", "❤️", "✨", "🌸"];
  confetti.innerHTML =
    emojis[Math.floor(Math.random() * emojis.length)];

  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.animationDuration =
    (2 + Math.random() * 3) + "s";

  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 5000);

}
//
// var sec1 = document.querySelector(".sec-1");
// var scratchcard = document.querySelector(".scratch-card");
// var four = document.querySelector(".four");
// var photo = document.querySelector(".photo");
// function openInvitation(){
//     sec1.style.display = "block";

//     scratchcard.style.display = "block";
//     four.style.display = "block";
//     photo.style.display = "block";}

