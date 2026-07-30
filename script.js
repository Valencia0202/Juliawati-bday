// ==========================
// Elements
// ==========================

const candles = document.querySelectorAll(".candle");
const messageSection = document.getElementById("messageSection");
const finalSection = document.getElementById("finalSection");
const giftBtn = document.getElementById("giftBtn");

const music = document.getElementById("birthdayMusic");
const blow = document.getElementById("blowSound");

const hearts = document.getElementById("hearts");
const balloons = document.getElementById("balloons");

const typewriter = document.getElementById("typewriter");

// ==========================
// Birthday Message
// ==========================

const message = `Happy Birthday ❤️

Today is all about celebrating you.

Thank you for bringing so much happiness into the lives of everyone around you.

May this year be filled with laughter, success, love, and unforgettable memories.

Never stop smiling, because your smile makes the world a brighter place.

Happy Birthday! 🎉`;

let blownCandles = 0;

// ==========================
// Candle Click
// ==========================

candles.forEach(candle => {

    candle.addEventListener("click", () => {

        if (candle.classList.contains("out")) return;

        candle.classList.add("out");

        blownCandles++;

        blow.currentTime = 0;
        blow.play();

        createSmoke(candle);

        if (blownCandles === candles.length) {

            celebrate();

        }

    });

});

// ==========================
// Smoke Effect
// ==========================

function createSmoke(candle){

    const smoke = document.createElement("div");

    smoke.innerHTML = "💨";

    smoke.style.position = "absolute";
    smoke.style.left = "50%";
    smoke.style.top = "-25px";
    smoke.style.transform = "translateX(-50%)";
    smoke.style.fontSize = "20px";
    smoke.style.animation = "fadeSmoke 2s forwards";

    candle.appendChild(smoke);

    setTimeout(()=>{

        smoke.remove();

    },2000);

}

// ==========================
// Celebration
// ==========================

function celebrate(){

    messageSection.classList.remove("hidden");

    music.play();

    startTypewriter();

    confetti({

        particleCount:250,
        spread:180,
        origin:{y:0.6}

    });

    createHearts();

    createBalloons();

}

// ==========================
// Typewriter
// ==========================

function startTypewriter(){

    let i=0;

    const timer=setInterval(()=>{

        typewriter.innerHTML += message.charAt(i);

        i++;

        if(i>=message.length){

            clearInterval(timer);

        }

    },35);

}

// ==========================
// Hearts
// ==========================

function createHearts(){

    const interval=setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        hearts.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },6000);

    },300);

    setTimeout(()=>{

        clearInterval(interval);

    },10000);

}

// ==========================
// Balloons
// ==========================

function createBalloons(){

    const emojis=["🎈","🎈","🎈","🎈"];

    const interval=setInterval(()=>{

        const balloon=document.createElement("div");

        balloon.className="balloon";

        balloon.innerHTML=
            emojis[Math.floor(Math.random()*emojis.length)];

        balloon.style.left=Math.random()*100+"vw";

        balloon.style.animationDuration=
            (5+Math.random()*5)+"s";

        balloons.appendChild(balloon);

        setTimeout(()=>{

            balloon.remove();

        },10000);

    },500);

    setTimeout(()=>{

        clearInterval(interval);

    },10000);

}

// ==========================
// Gift Button
// ==========================

giftBtn.addEventListener("click",()=>{

    finalSection.classList.remove("hidden");

    finalSection.scrollIntoView({

        behavior:"smooth"

    });

    confetti({

        particleCount:400,
        spread:250

    });

});

// ==========================
// Smoke Animation
// ==========================

const style=document.createElement("style");

style.innerHTML=`

@keyframes fadeSmoke{

0%{

opacity:1;
transform:translate(-50%,0) scale(1);

}

100%{

opacity:0;
transform:translate(-50%,-70px) scale(2);

}

}

`;

document.head.appendChild(style);