//Variables
const textArea1 = document.querySelector(".área-de-texto-1");
const textArea2 = document.querySelector(".área-de-texto-2");

//Función al clickear el botón de encriptar
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea1.value)
    textArea2.value = textoEncriptado;
    textArea1.value = "";
    textArea2.style.backgroundImage = "none"
}


//Función de encriptar el texto
function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }


    }
    return stringEncriptada
    
}

//Función al clickear el botón desencriptar
function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea1.value)
    textArea2.value = textoEncriptado;
    textArea1.value = "";
    

}

//Función de desencriptar el texto
function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }


    }
    return stringDesencriptada
    
}

//Función al clickear botón limpiar 1
function limpiar1() {
     valorTextArea1 = document.querySelector(".área-de-texto-1").value ="";
}

//Función al clickear botón limpiar 2
function limpiar2() {
    valorTextArea2 = document.querySelector(".área-de-texto-2").value ="";
}

//Función al clickear el botón copiar
function botónCopiar(newClip) {
    const element = document.querySelector(".área-de-texto-2");
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
}
