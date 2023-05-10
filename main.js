let Textoaencriptar= document.querySelector("input.texto");
let Textoadesencriptar= document.querySelector("input.texto");
let Letras = ["ai","enter","imes","ober","ufat"];
let Mensajee="";
let MensajeNuevo=[];
let Mensajencriptado=[];
let Encriptado="";
  
  function alertas(){
    Textoaencriptar.focus();
    Textoadesencriptar.focus();
    document.getElementById("Alerta").innerHTML="Ningun mensaje fue encontrado";
    document.getElementById("Alerta2").innerHTML="Ingrese el texto que desees Encriptar o Desencriptar";
    document.getElementById('btoncopiar').style.display = 'none';
    document.getElementById('btonborrar').style.display = 'none';
    document.getElementById('cajaimg').style.height = '280px';
    document.getElementById("TextMsg").style.display="none";
    document.getElementById('imag').style.display = 'flex';
    document.getElementById("textonuevo").style.display="none";
}

  function Encriptar(){
    let Mensajee=Textoaencriptar.value
     MensajeNuevo.push(Mensajee)
    
    for(i=0;i<Mensajee.length;i++){
      Mensajencriptado.push(Mensajee[i])
      
      if (Mensajencriptado[i]=="a"){
        Mensajencriptado[i]=Letras[0]
      }
      if (Mensajencriptado[i]=="e"){
        Mensajencriptado[i]=Letras[1] 
      }
      if (Mensajencriptado[i]=="i"){
        Mensajencriptado[i]=Letras[2] 
      }
      if (Mensajencriptado[i]=="o"){
        Mensajencriptado[i]=Letras[3] 
      }
      if (Mensajencriptado[i]=="u"){
        Mensajencriptado[i]=Letras[4] 
      } 
      Encriptado = Encriptado+Mensajencriptado[i]
     }
  document.getElementById('textonuevo').innerHTML=Encriptado;
     console.log(Encriptado);
    animacion();
  }
  
  function Desencriptar(){
    let Mensaje=Textoadesencriptar.value;
    let Cambioa=Mensaje.replaceAll("ai","a");
    let Cambioe=Cambioa.replaceAll("enter","e");
    let Cambioi=Cambioe.replaceAll("imes","i");
    let Cambioo=Cambioi.replaceAll("ober","o");
    let Cambiou=Cambioo.replaceAll("ufat","u");
    
    document.getElementById('textonuevo').innerHTML=Cambiou; 
    console.log(Cambiou);
    animacion();
  }
  
  function BORRAR (){
    Encriptado="";
    Mensajencriptado.length = 0;
    MensajeNuevo.length = 0;
    Mensajee="";
    Textoaencriptar.value=undefined;
    Textoadesencriptar.value="";
    console.clear();
    Cambiou="";
    alertas();
  }

  function animacion (){
    document.getElementById("Alerta").innerHTML="";
    document.getElementById("Alerta2").innerHTML="";
    document.getElementById('btoncopiar').style.display = 'inline';
    document.getElementById('btonborrar').style.display = 'inline';
    document.getElementById("TextMsg").style.display ='inline';
    document.getElementById('cajaimg').style.height = '360px';
    document.getElementById('imag').style.display = 'none'
    document.getElementById("textonuevo").style.display="inline";

  }

  document.getElementById('btoncopiar').onclick = function() {
    const _this = this
    navigator.clipboard.writeText(document.getElementById('textonuevo').innerText).then(function(){
        _this.innerText ='Texto Copiado...'
        
        setTimeout(function(){
            _this.innerText = 'Copiar Texto'
        }, 1000)
    })
}

let boton=document.querySelector("button.botonencriptar");
    boton.onclick = Encriptar;
let boton1=document.querySelector("button.botondesencriptar");
    boton1.onclick = Desencriptar;
let botonborrar=document.querySelector("button.borrar");
    botonborrar.onclick = BORRAR;
alertas();