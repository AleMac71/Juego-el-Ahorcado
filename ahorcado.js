var palabras=["PEDRO","AUTO","CAMIONETA","AVION","VENTILADOR","TELEVISOR","MESA","ALURA","ORACLE","AHORCADO","CAMA","CAMELLO","LAMPARA","MOTONETA","COMPUTADORA","PIEDRA","CANTANTE","TENTACION","SENTADO","CALCULADORA","TELEFONO","JAVASCRIPT","MOSTAZA"];
var TotalPalabras=palabras.length;
var letrainput="";
var arr=[];
var arr1=[];
var ContErrores=0
var arrletras=[""];
var aciertos=0
var arrguiones=""



function iniciarjuego(){
    var cont=0
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
        var NumeroRandom= getRandomInt(TotalPalabras)
        console.log(palabras[NumeroRandom])
    arr = Array.from(palabras[NumeroRandom])
    for (i=0; i<arr.length; i++){
        cont=cont+1
        arrguiones+="-"
    } 
    window.scroll({
        top: 642,
        left: 100,
        behavior: 'smooth'
      });

      linea(arrguiones)
      document.addEventListener('keypress', logKey);
    return arr,cont;
}

function logKey(e) {
    var usaletras=[];
    var ponerletras=""
    var ContSI=0
    var ingresado=0
    var letrainput = ` ${e.code}`;
    letrainput= letrainput.slice(-1)
    console.log(letrainput)
    arr1=arr

    for (i=0; i<arrletras.length; i++){

        if ((letrainput.search(/[^0-9]+/) === -1)){
            alert("Solo ingrese letras validas.");
            ingresado=1
        }
        if (letrainput==arrletras[i]){
            alert("Letra ya ingresada")
            ingresado=1
        }
    }

    if (ingresado==0){
        arrletras.push(letrainput)
        
        for (i=0; i<arr1.length; i++){
            for (i=0; i<arr1.length; i++){
                if (arr1[i]==letrainput){
                    console.log("SI");
                    ContSI=ContSI+1
                    ponerletras=ponerletras+letrainput+"  "
                }
                else if (arr1[i]!=arr1.length){
                    console.log("NO");
                    ponerletras=ponerletras+"   "
                }
            }
        }
        letras(ponerletras)
        if (ContSI==0){
            console.log("Esa letra no esta en la palabra")
            ContErrores=ContErrores+1
            usaletras.push(letrainput)
            letrasmal(usaletras)
        }
            else{
                console.log("Esa letra esta en la palabra")
            }
        
        switch (ContErrores){
            case 1:{
                Cabeza()
                break;
            }
            case 2:{
                Cuerpo()
                break
            }
            case 3:{
                piernaderecha()
                break
            }
            case 4:{
                piernaizquierda()
                break
            }
            case 5:{
                brazoizquierdo()
                break
            }
            case 6:{
                brazoderecho()
                break
            }
            case 7:{
                cara()
                arr1=arr1.join("")
                perdio(arr1)
                alert("Usted Perdio\nLa palabra era "+arr1)
                window.scroll({
                    top: 0,
                    left: 100,
                  });

                break;
            }
        }
        aciertos=aciertos+ContSI
        if (aciertos==arr1.length){
            arr1=arr1.join("")
            alert("¡FELICITACIONES! \n Usted gano")
            window.scroll({
                top: 0,
                left: 100,
              });
            location.reload();
        }
        return ContErrores,arrletras,aciertos;
    }
}

function cambiaMayuscula(elemento){
    elemento.value = elemento.value.toUpperCase();
}

function nuevaPalabra(){
    var input= document.getElementById("input-nueva-palabra").value;
    input=input.toUpperCase();
    palabras.push(input)
    var documento=document.getElementById("input-nueva-palabra")
    documento.value=""
    TotalPalabras=TotalPalabras+1
    return cambiaMayuscula, TotalPalabras;
}