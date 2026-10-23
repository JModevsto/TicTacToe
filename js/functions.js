var turno = true;
var contador = 0;
var terminado = false;
var resaltado = `content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 0, 0, 0.35);
    z-index: 1;
    pointer-events: none;`;

function activo(boton) {
    boton.disabled = true;
    boton.value = ""; // Borramos el texto "X" o "O"

    var imagen = turno ? './img/blanco.png' : './img/negro.png';
    boton.style.backgroundImage = `url('${imagen}')`;

    turno = !turno;

    verificar();
}

function verificar(){
    var botones = document.querySelectorAll("input[type='button']");
    const estilo = document.createElement("style");

    //primera horizontal
    if(botones[0].style.backgroundImage == botones[1].style.backgroundImage && 
        botones[1].style.backgroundImage == botones[2].style.backgroundImage && 
        botones[0].style.backgroundImage !== ""){
        if (botones[0].style.backgroundImage.includes("blanco")) {
            document.getElementById("ganador").innerHTML="¡Gana gato blanco!";
        }else{
            document.getElementById("ganador").innerHTML="¡Gana gato negro!";
        }
        estilo.textContent = `tr:nth-child(1) td::after{${resaltado}}`;

        bloquear();
    }

    //segunda horizontal
    if(botones[3].style.backgroundImage == botones[4].style.backgroundImage && 
        botones[4].style.backgroundImage == botones[5].style.backgroundImage && 
        botones[3].style.backgroundImage !== ""){
        if (botones[3].style.backgroundImage.includes("blanco")) {
            document.getElementById("ganador").innerHTML="¡Gana gato blanco!";
        }else{
            document.getElementById("ganador").innerHTML="¡Gana gato negro!";
        }
        estilo.textContent = `tr:nth-child(2) td::after{${resaltado}}`;
        
        bloquear();
    }

    //tercera horizontal
    if(botones[6].style.backgroundImage == botones[7].style.backgroundImage && 
        botones[7].style.backgroundImage == botones[8].style.backgroundImage && 
        botones[6].style.backgroundImage !== ""){
        if (botones[6].style.backgroundImage.includes("blanco")) {
            document.getElementById("ganador").innerHTML="¡Gana gato blanco!";
        }else{
            document.getElementById("ganador").innerHTML="¡Gana gato negro!";
        }
        estilo.textContent = `tr:nth-child(3) td::after{${resaltado}}`;

        bloquear();
    }

    //primera vertical
    if(botones[0].style.backgroundImage == botones[3].style.backgroundImage && 
        botones[3].style.backgroundImage == botones[6].style.backgroundImage && 
        botones[0].style.backgroundImage !== ""){
        if (botones[0].style.backgroundImage.includes("blanco")) {
            document.getElementById("ganador").innerHTML="¡Gana gato blanco!";
        }else{
            document.getElementById("ganador").innerHTML="¡Gana gato negro!";
        }
        estilo.textContent = `td:nth-child(1)::after{${resaltado}}`;

        bloquear();
    }

    //segunda vertical
    if(botones[1].style.backgroundImage == botones[4].style.backgroundImage && 
        botones[4].style.backgroundImage == botones[7].style.backgroundImage && 
        botones[1].style.backgroundImage !== ""){
        if (botones[1].style.backgroundImage.includes("blanco")) {
            document.getElementById("ganador").innerHTML="¡Gana gato blanco!";
        }else{
            document.getElementById("ganador").innerHTML="¡Gana gato negro!";
        }
        estilo.textContent = `td:nth-child(2)::after{${resaltado}}`;

        bloquear();
    }

    //tercera vertical
    if(botones[2].style.backgroundImage == botones[5].style.backgroundImage && 
        botones[5].style.backgroundImage == botones[8].style.backgroundImage && 
        botones[2].style.backgroundImage !== ""){
        if (botones[2].style.backgroundImage.includes("blanco")) {
            document.getElementById("ganador").innerHTML="¡Gana gato blanco!";
        }else{
            document.getElementById("ganador").innerHTML="¡Gana gato negro!";
        }
        estilo.textContent = `td:nth-child(3)::after{${resaltado}}`;

        bloquear();
    }

    //primera diagonal \
    if(botones[0].style.backgroundImage == botones[4].style.backgroundImage && 
        botones[4].style.backgroundImage == botones[8].style.backgroundImage && 
        botones[0].style.backgroundImage !== ""){
        if (botones[0].style.backgroundImage.includes("blanco")) {
            document.getElementById("ganador").innerHTML="¡Gana gato blanco!";
        }else{
            document.getElementById("ganador").innerHTML="¡Gana gato negro!";
        }
        estilo.textContent = `tr:nth-child(1) td:nth-child(1)::after,
                              tr:nth-child(2) td:nth-child(2)::after,
                              tr:nth-child(3) td:nth-child(3)::after{${resaltado}}`;

        bloquear();
    }

    //segunda diagonal /
    if(botones[2].style.backgroundImage == botones[4].style.backgroundImage && 
        botones[4].style.backgroundImage == botones[6].style.backgroundImage && 
        botones[2].style.backgroundImage !== ""){
        if (botones[2].style.backgroundImage.includes("blanco")) {
            document.getElementById("ganador").innerHTML="¡Gana gato blanco!";
        }else{
            document.getElementById("ganador").innerHTML="¡Gana gato negro!";
        }
        estilo.textContent = `tr:nth-child(1) td:nth-child(3)::after,
                              tr:nth-child(2) td:nth-child(2)::after,
                              tr:nth-child(3) td:nth-child(1)::after{${resaltado}}`;

        bloquear();
    }

    // empate: se revisa hasta el final, cuando ya sabemos si alguien ganó
    contador++;
    if(contador === 9 && !terminado){
        document.getElementById("ganador").innerHTML = "Empate";
    }

    document.head.appendChild(estilo);
}

function bloquear(){
    terminado = true;
    document.querySelectorAll("input[type='button']").forEach(boton => {boton.disabled = true});
}

function reiniciar(){
    window.location.reload();
}