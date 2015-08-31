var palabra ="tamarindo";
var hombre;


//declaracion de la clase ahorcado

var Ahorcado = function(con){
//this es las variables locales de la clase, accesibles en toda la clase
//this.contexto es el context de dibujo del canvas que llega pro parametro desde
//la variable con
this.contexto = con;
this.maximo = 5;
this.intentos = 0;
this.vivo  = true;

this.dibujar();
}

Ahorcado.prototype.dibujar = function() {
	// body...
	var dibujo = this.contexto;

	//dibujando el poste
	dibujo.beginPath();
	//arrancar el camino
	dibujo.moveTo(150,100);
	dibujo.lineTo(150,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	dibujo.lineWidth = 15;
	dibujo.strokeStyle= "#000";
	dibujo.stroke();
	dibujo.closePath();
	if (this.intentos > 0) {
		//intentos = 1  ---> rostro
		dibujo.beginPath();
		dibujo.arc(150,140,40,0, Math.PI *2, false );
		dibujo.strokeStyle= "#f00";
		dibujo.lineWidth = 5;
		dibujo.stroke();
		dibujo.closePath();

		if (this.intentos > 1) {
			//si intentos es igual a 2, dibujo torz
			dibujo.beginPath();
			dibujo.moveTo(150,180);
			dibujo.lineTo(150,250);		
			dibujo.strokeStyle= "#f00";
			dibujo.lineWidth = 5;
			dibujo.stroke();
			dibujo.closePath();

			if (this.intentos > 2) {
				//dibujo brazo, intento 3
				dibujo.beginPath();
				dibujo.moveTo(120,220);
				dibujo.lineTo(150,180);	
				dibujo.lineTo(180,220);		

				dibujo.strokeStyle= "#f00";
				dibujo.lineWidth = 5;
				dibujo.stroke();
				dibujo.closePath();

				if (this.intentos > 3) {
					//intento 4

					//dibujo piernas
					dibujo.beginPath();
					dibujo.moveTo(120,290);
					dibujo.lineTo(150,250);	
					dibujo.lineTo(180,290);

					dibujo.strokeStyle= "#f00";
					dibujo.lineWidth = 5;
					dibujo.stroke();
					dibujo.closePath();


					if (this.intentos > 4) { 
						//
						dibujo.beginPath();
						//ojo izquierdo
						// dibujo.moveTo(125,120);
						// dibujo.lineTo(145,145);
						// dibujo.moveTo(125,145);
						dibujo.moveTo(125,120);
						dibujo.lineTo(145,145);
						dibujo.moveTo(145,120);
						dibujo.lineTo(125,145);

						//ojo derecho
						dibujo.moveTo(155,120);
						dibujo.lineTo(175,145);
						dibujo.moveTo(175,120);
						dibujo.lineTo(155,145);

						dibujo.strokeStyle = "blue";
						dibujo.lineWidth=5;
						dibujo.stroke();
						dibujo.closePath();
					};
				};
			};
		};

	};
};

Ahorcado.prototype.trazar = function() {
	// body...
	this.intentos++;
	if (this.intentos >= this.maximo) {
		this.vivo = false;
		alert("estas muerto");
	}

	this.dibujar();

};
function iniciar(){
	// alert("la palabra es: "+ palabra);
	//creamos una variable canvas
	var canvas = document.getElementById("c");

	//definimos las dimensiones del canvas
	canvas.width = 500;
	canvas.height = 400;

	//creamos una variable para el contexto del canvas
	var contexto = canvas.getContext("2d");
	hombre = new Ahorcado(contexto);
	hombre.trazar();
	hombre.trazar();
	hombre.trazar();
	hombre.trazar();
	hombre.trazar();





}