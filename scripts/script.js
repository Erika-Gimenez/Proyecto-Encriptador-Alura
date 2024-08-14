const entradaTexto = document.querySelector(".sec1-entrada-text");
const salidaTexto = document.querySelector(".sec2-salida-tex");

const divEnunciadoSalidaTexto = document.querySelector(".sec2-div1-text-info");
// const divBotonCopiar = document.querySelector(".sec2-div-boton");

const botonEncriptador = document.querySelector(".div2-btn-encrip");
const botonDesencriptador = document.querySelector(".div2-btn-desencrip");
const botonCopiar = document.querySelector(".div-btn-copiar");



function encriptar(frase) {
   let encriptado = " ";
   
   for (let i = 0; i < frase.length; i++) {
    const opc = frase[i];

    switch (opc) {
        case 'o':
            encriptado += 'ober';
            break;
        case 'a':
            encriptado += 'ai';
            break;
        case 'e':
            encriptado += 'enter';
            break;
        case 'i':
            encriptado += 'imes';
            break;
        case 'u':
            encriptado += 'ufat';
            break;
        default:
            encriptado += opc;
    }
    
   }

   return encriptado;
}

//esto lo sacaste del video. revisar bien no te salio con el segun volve a intentar otra opc con tiempo

function desEncriptar(frase) {

    let matrizFrase = [["ai","a"],["enter","e"],["imes","i"],["ober","o"],["ufat", "u"]];
    
    for (let i = 0; i < matrizFrase.length; i++) {
        if (frase.includes(matrizFrase[i][0])) {
            frase = frase.replaceAll(matrizFrase[i][0],matrizFrase[i][1]);
        }
        
    }

    return frase;
}

   function eventoBotonEncriptar() {

    let frase = entradaTexto.value;
    let encriptado = encriptar(frase);
    console.log(entradaTexto.value);
    console.log(encriptado);
    salidaTexto.textContent = encriptado;

     entradaTexto.value = "";// por el momento no veo q lo pida pero lo dejo 

    salidaTexto.style.backgroundImage = "none";
    salidaTexto.style.display = "block";
    divEnunciadoSalidaTexto.style.display = "none";
    botonCopiar.style.display = "block";
    
   }

   function eventoBotonDesencriptar(){
    let frase = entradaTexto.value;
    let desencriptado = desEncriptar(frase);

    salidaTexto.textContent = desencriptado;
    entradaTexto.value = "";
    console.log(desencriptado)
    

   }

   botonEncriptador.addEventListener('click', eventoBotonEncriptar);
   botonDesencriptador.addEventListener('click', eventoBotonDesencriptar);
