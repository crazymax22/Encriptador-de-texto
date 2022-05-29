
var palabraIngresada = document.getElementById("ingresoTexto");
var palabraAMostrar = document.getElementById("muestroTexto");

var botonEncriptar = document.getElementById("encriptar");
botonEncriptar.onclick = encriptar;

var expresionRegular=/^[a-z\s]+$/; //solo letras minúsculas y sin acentos ni caracteres especiales

var cajasMunieco =  document.getElementById("cajasMunieco");
var advertencia = document.getElementById("advertencia");

function encriptar() {
    var palabra = palabraIngresada.value.trim();
    
    if(expresionRegular.test(palabra)){
        
        advertencia.style.display = "none";
        cajasMunieco.style.display = "none";
        botonCopiar.style.display = "block"
        var palabraFinal = "";
        for (var i = 0; i < palabra.length; i++) {
            if (palabra[i] == "a"){
                palabraFinal = palabraFinal.concat("ai");
            }else if(palabra[i] == "e"){
                palabraFinal = palabraFinal.concat("enter");
            }else if(palabra[i] == "i"){
                palabraFinal = palabraFinal.concat("imes");
            }else if(palabra[i] == "o"){
                palabraFinal = palabraFinal.concat("ober");
            }else if(palabra[i] == "u"){
                palabraFinal = palabraFinal.concat("ufat");
            }else{
                palabraFinal = palabraFinal.concat(palabra[i]);
            }                
        }
        palabraAMostrar.innerText =palabraFinal;
    }else{
        advertencia.style.display = "block";
    }    
}

var botonEncriptar = document.getElementById("desencriptar");
botonEncriptar.onclick = desencriptar;

function desencriptar() {
       
    var palabra = palabraIngresada.value.trim();
   
    if(expresionRegular.test(palabra)){ 
        advertencia.style.display = "none";
        cajasMunieco.style.display = "none";
        botonCopiar.style.display = "block";
        var palabraFinal = "";
        
        for (var i = 0; i < palabra.length; i++) {
            if (palabra[i] == "a"){
                palabraFinal = palabraFinal.concat("a");
                i++;
            }else if(palabra[i] == "e"){
                palabraFinal = palabraFinal.concat("e");
                i+=4;
            }else if(palabra[i] == "i"){
                palabraFinal = palabraFinal.concat("i");
                i+=3;
            }else if(palabra[i] == "o"){
                palabraFinal = palabraFinal.concat("o");
                i+=3;
            }else if(palabra[i] == "u"){
                palabraFinal = palabraFinal.concat("u");
                i+=3;
            }else{
                palabraFinal = palabraFinal.concat(palabra[i]);
            }   
        }
        palabraAMostrar.innerText =palabraFinal;
    }else{
        advertencia.style.display = "block";
    }    
}

var botonCopiar = document.getElementById("copiar");
botonCopiar.onclick = copiar;

function copiar() {
    var copyText = document.getElementById("muestroTexto");
    document.getElementById("muestroTexto").select();
    navigator.clipboard.writeText(copyText.value);
}

