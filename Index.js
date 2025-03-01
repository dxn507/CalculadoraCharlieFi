const pantalla =document.getElementById("pantalla");
const botonesNumeros = document.querySelectorAll('.numero');
const btnClear=document.getElementById('botonClar');
const suma=document.getElementById('suma');
const resta=document.getElementById('sustraccion');
const divicion =document.getElementById("divicion");
const multiplicacion=document.getElementById("multiplicacion");
const botonigual =document.getElementById('igual');

var cifra =""; //num2
var acumulado =0; //num1
var sumar = false;
var restar = false;
var dividir=false;
var multiplicar=false;
var p_operacion = true;

//mostrar digitos
botonesNumeros.forEach(boton =>{ 
    boton.addEventListener('click',()=>{
       // pantalla+=boton.value
       pantalla.value=cifra+boton.value;  //lo que se ve en pantalla
       cifra = pantalla.value; //se actualiza cifra
    })
});

//SUMA
suma.addEventListener('click',()=>{
    if(restar){
        acumulado=acumulado-parseInt(cifra);
        pantalla.value=acumulado;
      }else if(dividir){
        acumulado=acumulado/parseInt(cifra);
        pantalla.value=acumulado;
      }else if(multiplicar){
        acumulado=acumulado*parseInt(cifra);
        pantalla.value=acumulado;
      }else{
      acumulado=acumulado+parseInt(cifra); //actualiza acumulado
      pantalla.value=acumulado;
      }
      cifra =" "; //resetea cifra
      sumar =true;
      restar=false;
      dividir=false
      multiplicar=false;
      p_operacion = false;
});
//RESTA
resta.addEventListener('click', ()=>{
  if(p_operacion == false){
     if(sumar){
     acumulado=acumulado+parseInt(cifra);
     pantalla.value=acumulado;
    } else if(dividir){
      acumulado=acumulado/parseInt(cifra);
      pantalla.value=acumulado;
    }else if(multiplicar){
      acumulado=acumulado*parseInt(cifra);
      pantalla.value=acumulado;
    }else{
     acumulado=acumulado-parseInt(cifra);
     pantalla.value=acumulado;
     }
   }else{
     acumulado=parseInt(cifra);
     p_operacion=false;
   }
   cifra ="";
   sumar=false;
   restar =true;
   dividir=false
   multiplicar=false;
});

//Division
divicion.addEventListener('click', ()=>{
   if(sumar){
    acumulado=acumulado+parseInt(cifra);
    pantalla.value=acumulado;
    }else if(restar){
      acumulado=acumulado-parseInt(cifra);
      pantalla.value=acumulado;
    }else if(multiplicar){
      acumulado=acumulado*parseInt(cifra);
      pantalla.value=acumulado;
    }else{
    acumulado=acumulado/parseInt(cifra); //actualiza acumulado
    pantalla.value=acumulado;
    }
  cifra =" "; //resetea cifra
  sumar=false;
  restar=false
  dividir = true;
  multiplicar=false;
});
//multiplicar
multiplicacion.addEventListener('click', ()=>{
  if(sumar){
    acumulado=acumulado+parseInt(cifra);
    pantalla.value=acumulado;
  }else if(restar){
      acumulado=acumulado-parseInt(cifra);
      pantalla.value=acumulado;
  }else if(dividir){
    acumulado=acumulado/parseInt(cifra); //actualiza acumulado
    pantalla.value=acumulado;
  }else{
    acumulado=acumulado+parseInt(cifra); //actualiza acumulado
    cifra=pantalla.value
  }
  cifra =""; //resetea cifra
  sumar=false;
  restar=false
  dividir = false;
  multiplicar=true;
});

function resultado() {
  
    if(sumar){
        pantalla.value=acumulado+parseInt(cifra);
    }else if(restar){
        pantalla.value=acumulado-parseInt(cifra);
    }else if(dividir){
      pantalla.value=acumulado/parseInt(cifra);
    }else if(multiplicar){
      pantalla.value=acumulado*parseInt(cifra);
    }
      acumulado=parseInt(pantalla.value);
      cifra=0;
}
function clear(){
    pantalla.value=0;
    cifra="";
    acumulado=0;
    p_operacion = true;
}

botonigual.addEventListener('click',resultado);
btnClear.addEventListener('click', clear);

pantalla.value=0;
