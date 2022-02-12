var pantalla= document.getElementById("ahorcado");
var pincel= pantalla.getContext("2d");

var canvas = document.getElementById("ahorcado");
var ctx = canvas.getContext("2d");
window.scroll({
    top: 1,
    left: 0,
    behavior: 'smooth'
  });


x=650

    pincel.fillStyle = "white";
    pincel.fillRect(0, 0, 1200, 800);

    pincel.fillStyle= "black" //Base
	pincel.beginPath();
    pincel.moveTo(100, 800);
    pincel.lineTo(600, 800);
	pincel.lineTo(500, 700);
	pincel.lineTo(200, 700);
    pincel.fill();

    pincel.fillStyle="black" //Poste vertical
    pincel.fillRect(350,200,25, 500);

    pincel.fillStyle="black"   //poste horizontal
    pincel.fillRect(350,175,400, 25);

    pincel.fillStyle="black" //Poste pequeño vertical
    pincel.fillRect(725,200,25, 50);

    function Cabeza(){
        pincel.fillStyle="black"
        pincel.beginPath()
        pincel.arc(737,299,50,0,2*3.14); //Cabeza
        pincel.fill();
    }
    function Cuerpo(){
        pincel.fillStyle="black" //Cuerpo
        pincel.fillRect(725,348,25, 150);
    }

    function piernaderecha(){
        pincel.rotate(Math.PI/17)
        pincel.fillRect(820, 328, 120, 25);
        pincel.setTransform(1, 0, 0, 1, 0, 0)
    }
    function piernaizquierda(){
        pincel.rotate(Math.PI/-17)
        pincel.fillRect(515, 600, 120, 25);
        pincel.setTransform(1, 0, 0, 1, 0, 0)
    }
    function brazoizquierdo(){
    pincel.rotate(Math.PI/-17)
    pincel.fillRect(550,480, 100, 25);
    pincel.setTransform(1, 0, 0, 1, 0, 0)}

    function brazoderecho(){
    pincel.rotate(Math.PI/17);
    pincel.fillRect(795,210, 120, 25);
    pincel.setTransform(1, 0, 0, 1, 0, 0)}

    function cara(){
        ctx.font="12pt Verdana";
        ctx.fillStyle = "white";
        ctx.fillText("X   X",737,299);
        ctx.fillText("***",737,332);

    }

    function perdio(arr1){
        ctx.font="20pt Gotic";
        ctx.strokeStyle="black";
        ctx.lineWidth = 2;
        ctx.shadowColor="red"
        ctx.shadowOffsetreeX = 5;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 0;
        ctx.strokeText("Usted perdio",1000,300);
        ctx.strokeText("la palabra es "+arr1,1000,330);

    }
    

    function linea(arrguiones){
        
        if (canvas && canvas.getContext) {
            if (ctx) {
                        ctx.textAlign="center";
                        
                        ctx.font="37pt Verdana";
                        ctx.fillStyle = "black";
                        ctx.fillText(arrguiones,899,650);
    
                        /*ctx.font="25pt Verdana";
                        ctx.strokeStyle="green";
                        ctx.lineWidth = 2;
                        ctx.strokeText("Nashe",centerX,120);*/
                    }
        }
    }

    function letras(ponerletras){
        
        if (canvas && canvas.getContext) {
            if (ctx) {
                        ctx.textAlign="center";
                        
                        ctx.font="16pt Verdana";
                        ctx.fillStyle = "black";
                        ctx.fillText(ponerletras,905,630);
            }
        }
    }

    function letrasmal(usaletras){
        
        if (canvas && canvas.getContext) {
            if (ctx) {
                        ctx.textAlign="center";
                        
                        ctx.font="16pt Verdana";
                        ctx.fillStyle = "black";
                        pincel.setTransform(1, 0, 0, 1, 0, 0)
                        ctx.setTransform(1, 0, 0, 1, 0, 0)
                        ctx.fillText(usaletras+"-",x,790);
                        x=x+22
                        return x;
            }
        }
    }