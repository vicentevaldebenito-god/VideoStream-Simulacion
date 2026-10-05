console.log(`Conexion Exitosa`)

let Like = document.querySelector("#Like");
let Like_Counter = document.querySelector("#Like_Counter");

let Contador = 4899

Like.addEventListener("click", function () {
    Contador++;
    let Transformador = (Contador / 1000).toFixed(1)
    Like_Counter.innerText = `${Transformador}k`;
});

let Subs_Button = document.querySelector("#Subs_Button");
let Subs = document.querySelector("#Subs");

Subs_Button.addEventListener("click", function(){
    Subs.innerText = `(+1)`
    Subs_Button.innerText = `Suscrito`
})

const videos = document.querySelectorAll(".Video");


videos.forEach(function(video) {
    video.addEventListener("mouseover", function() {
        video.play();
    });

    video.addEventListener("mouseout", function() {
        video.pause();
    });
});