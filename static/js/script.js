console.log("Conexión Exitosa");

// 1. Inicio de sesion simple
const userBox = document.querySelector("#userBox");
const userName = document.querySelector("#userName");

if (userBox && userName) {
    userBox.addEventListener("click", function () {
        const usuarioIngresado = prompt("Ingresa tu nombre de usuario:");
        if (usuarioIngresado && usuarioIngresado.trim() !== "") {
            userName.innerText = `¡Bienvenido, ${usuarioIngresado}!`;
        }
    });
}

// 2. Sumar Me gusta
const likeButton = document.querySelector("#Like");
const likeCounter = document.querySelector("#Like_Counter");
let contadorLikes = 4800;

if (likeButton && likeCounter) {
    likeButton.addEventListener("click", function () {
        contadorLikes++;
        let formato = (contadorLikes / 1000).toFixed(1).replace(".", ",");
        likeCounter.innerText = `${formato} K`;
    });
}

// 3. Suscribirse
const subsButton = document.querySelector("#Subs_Button");
const subsText = document.querySelector("#Subs");
let suscrito = false;

if (subsButton && subsText) {
    subsButton.addEventListener("click", function () {
        if (!suscrito) {
            subsText.innerText = " (+1)";
            subsButton.innerText = "Suscrito";
            subsButton.classList.add("suscrito");
            suscrito = true;
        } else {
            subsText.innerText = "";
            subsButton.innerText = "Suscribirse";
            subsButton.classList.remove("suscrito");
            suscrito = false;
        }
    });
}

// 4. Contador de la cola
const contadorCola = document.querySelector("#contadorCola");
const listaCola = document.querySelector(".contenedor_lista_cola");

function actualizarContadorCola() {
    if (listaCola && contadorCola) {
        const total = listaCola.querySelectorAll(".video_Cola").length;
        contadorCola.innerText = total;
    }
}

// 5. Hover para reproducir/pausar en todas las miniaturas
function activarHoverVideos() {
    const todosLosVideos = document.querySelectorAll("video.Video");
    todosLosVideos.forEach(function (vid) {
        vid.muted = true;
        
        vid.addEventListener("mouseover", function () {
            vid.play().catch(() => {});
        });
        
        vid.addEventListener("mouseout", function () {
            vid.pause();
            vid.currentTime = 0;
        });
    });
}
activarHoverVideos();

// 7. Añadir y quitar de la cola
const botonesAnadir = document.querySelectorAll(".btn-añadir");

botonesAnadir.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.stopPropagation();
        const tarjetaOriginal = btn.closest(".video_Cola");
        if (!tarjetaOriginal || !listaCola) return;

        const copiaTarjeta = tarjetaOriginal.cloneNode(true);
        const divBoton = copiaTarjeta.querySelector(".video_Info_Añadir");

        if (divBoton) {
            divBoton.className = "video_Info_Quitar";
            divBoton.innerHTML = '<button class="btn-quitar">x</button>';
        }

        listaCola.appendChild(copiaTarjeta);
        actualizarContadorCola();
        activarHoverVideos();
        asignarEventosQuitar();
    });
});

function asignarEventosQuitar() {
    const botonesQuitar = document.querySelectorAll(".btn-quitar");
    botonesQuitar.forEach(function (btn) {
        btn.onclick = function (e) {
            e.stopPropagation();
            const tarjeta = btn.closest(".video_Cola");
            if (tarjeta) {
                tarjeta.remove();
                actualizarContadorCola();
            }
        };
    });
}
asignarEventosQuitar();

// 8. Limpiar cola
const btnLimpiar = document.querySelector("#btnLimpiar");
if (btnLimpiar && listaCola) {
    btnLimpiar.addEventListener("click", function () {
        listaCola.innerHTML = "";
        actualizarContadorCola();
    });
}