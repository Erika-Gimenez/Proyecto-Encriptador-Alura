const entradaTexto = document.querySelector(".sec1-entrada-text");
const salidaTexto = document.querySelector(".sec2-salida-tex");

const divEnunciadoSalidaTexto = document.querySelector(".sec2-div1-text-info");

const botonEncriptador = document.querySelector(".div2-btn-encrip");
const botonDesencriptador = document.querySelector(".div2-btn-desencrip");
const botonCopiar = document.querySelector(".div-btn-copiar");


function validarFrase(frase) {
    const tieneMayusculas = /[A-Z]/.test(frase);
    const tieneTildes = /[áéíóúü]/.test(frase);
    // const tieneCaracteresEspeciales = /[^a-zA-Z0-9\s]/.test(frase);
    if (tieneMayusculas && tieneTildes) {
        return "Solo se permiten minúsculas sin tildes.";
    } else if (tieneMayusculas) {
        return "Solo se permiten minúsculas.";
    } else if (tieneTildes) {
        return "Solo se permiten caracteres sin tildes.";
    }
    // else if (tieneCaracteresEspeciales){
    //     return "La frase no puede contener caracteres especiales."
    // } no lo pide pero lo dejo por si las dudas 
    return null;
}

function encriptar(frase) {
   let encriptado = "";

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

    const mensajeError = validarFrase(frase);

    if (mensajeError) {
        salidaTexto.textContent = mensajeError;
        salidaTexto.style.backgroundImage = "none";
        salidaTexto.style.display = "block";
        divEnunciadoSalidaTexto.style.display = "none";
        botonCopiar.style.display = "block";
        botonCopiar.textContent = "OK";
        botonCopiar.removeEventListener('click',eventoBotonCopiar);
        botonCopiar.addEventListener('click',botonAvisoCondicion);

        return;
    }

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
    console.log(desencriptado);
    salidaTexto.style.backgroundImage = "none";
    salidaTexto.style.display = "block";
    divEnunciadoSalidaTexto.style.display = "none";
    botonCopiar.style.display = "block";
 
}

/*navigator.clipboard.writeText(frase) 
writeText() este metodo es asincrono quiere decir que devuelve una promesa
que puede resolverce o rechazarce dependiendo de la operacion por ese motivo
se utiliza una async await espera la promesa  try si la promesa se aprueba  catch para manejar errores 
*/

async function copiarFrase(frase) {
    let copiaExitosa = false;
    try {
        await navigator.clipboard.writeText(frase);
        alert('Texto copiado con éxito');
        copiaExitosa = true;
       
    } catch (error) {
        console.error(error.message);
    }
   
    if (copiaExitosa) {
        window.location.href = window.location.href;
    }
}

function eventoBotonCopiar() {
    let frase = salidaTexto.textContent; 
    copiarFrase(frase);
    console.log(frase);
}

function botonAvisoCondicion() {
    location.reload();
}
  

   botonEncriptador.addEventListener('click', eventoBotonEncriptar);
   botonDesencriptador.addEventListener('click', eventoBotonDesencriptar);
   botonCopiar.addEventListener('click',eventoBotonCopiar);
