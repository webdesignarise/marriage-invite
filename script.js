for(let i = 0; i < 70; i++){

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (4 + Math.random() * 8) + "s";

    particle.style.animationDelay =
        Math.random() * 6 + "s";

    document.getElementById("invitation")
        .appendChild(particle);
}


/* =========================
   OPEN INVITATION
========================= */

function openInvitation(){

    document.getElementById("intro")
        .classList.add("hide");

    setTimeout(() => {

        document.getElementById("card")
            .classList.add("show");

        createConfetti();

    }, 700);
}


/* =========================
   CONFETTI
========================= */

function createConfetti(){

    for(let i = 0; i < 100; i++){

        const c = document.createElement("div");

        c.className = "confetti";

        c.style.left =
            Math.random() * 100 + "%";

        c.style.animationDelay =
            Math.random() * 2 + "s";

        c.style.transform =
            `rotate(${Math.random()*360}deg)`;

        document.getElementById("invitation")
            .appendChild(c);

        setTimeout(() => {
            c.remove();
        }, 6000);
    }
}
