var drawPile = [];
var handPile = new Array(6);
var discardPile = [];


//Copiar slots para crear la UI
for (let i = 1; i < maniobrasPreparadas; i++) {
		document.getElementById("contentGrid").appendChild(document.getElementById("slot0").cloneNode(true)).id="slot"+i;
		document.querySelector("#slot" + i + " .drawButton").setAttribute("onClick", "drawCard("+i+");");
		document.querySelector("#slot" + i + " .discardButton").setAttribute("onClick", "discardCard("+i+");");
	}

//Llena el mazo de maniobras y las baraja
for (let i = 0; i < maniobras.length; i++) {
	drawPile.push(i);
}
shuffle(drawPile);
updateUI();


//Robar carta
function drawCard(slotId) {
	if (drawPile.length == 0) {
		if (discardPile.length > 0) {
			for (let i = discardPile.length - 1;i >= 0;i--) {
				drawPile.push(discardPile.pop());
				alert("drawPile: " + drawPile + "\ndiscardPile: " + discardPile);
			}
			shuffle(drawPile);
			alert(drawPile);
			drawCard(slotId);
		}
	}
	else {
		var maneuverId = drawPile.pop();
		handPile[slotId] = maneuverId;
		updateUI();
		fillCardData(slotId, maneuverId);
	}
}

//Descartar carta
function discardCard(slotId) {
	discardPile.push(handPile[slotId]);
	handPile[slotId] = null;

	document.querySelector("#slot"+ slotId + " .card").style.display = "none";
	document.querySelector("#slot"+ slotId + " .drawButton").style.display = "initial";
	updateUI();
}

//Baraja las cartas del mazo
function shuffle(deck) {
	for (let i = deck.length - 1;i > 0;i--) {
		let j = Math.floor(Math.random() * (i + 1));

		let temp = deck[i];
		deck[i] = deck[j];
		deck[j] = temp;
	}
}

//Actualiza los números de cartas en el mazo y en descartes
function updateUI() {
	document.getElementById("pilaRobar").textContent = drawPile.length;
	document.getElementById("pilaDescartes").textContent = discardPile.length;
}

//Actualiza los campos de la carta con los valores apropiados
function fillCardData(id, maneuver) {
	let slotId = "#slot"+id;
	let tempString = "";
	document.querySelector(slotId +" .manName").textContent = maniobras[maneuver].nombre;

	switch (maniobras[maneuver].disciplina) {
		case "devo": tempString = "url('images/dis_devoutSpirit.png')";
			break;
		case "drag": tempString = "url('images/dis_stoneDragon.png')";
			break;
		case "cuer": tempString = "url('images/dis_whiteRaven.png')";
			break;
		default: tempString = "url('images/error.gif')";
			break;
		}
	document.querySelector(slotId + " .backgroundDisc").style.backgroundImage = tempString

	if (maniobras[maneuver].subtipo == "") {  //Si tiene subtipo, se le pone. Si no, solo cambiamos el tipo.
		document.querySelector(slotId + " .manType").textContent = maniobras[maneuver].tipo;
	} else {
		document.querySelector(slotId + " .manType").textContent = maniobras[maneuver].tipo + " [" + maniobras[maneuver].subtipo + "]";
	}
	switch (maniobras[maneuver].tipo) {
		case "Golpe": tempString = "images/type_Strike.png";
			break;
		case "Impulso": tempString = "images/type_Boost.png";
			break;
		case "Contraataque": tempString = "images/type_Counter.png";
			break;
		default: tempString = "images/error.gif";
			break;
	}
	document.querySelector(slotId + " .manImg").src = tempString;

	document.querySelector(slotId + " .manLevel").textContent = maniobras[maneuver].nivel;
	document.querySelector(slotId + " .manAccion").textContent = maniobras[maneuver].accion;
	document.querySelector(slotId + " .manAlcance").textContent = maniobras[maneuver].alcance;
	document.querySelector(slotId + " .manObjetivo").textContent = maniobras[maneuver].objetivo;
	document.querySelector(slotId + " .manDuracion").textContent = maniobras[maneuver].duracion;
	document.querySelector(slotId + " .manCondicion").textContent = maniobras[maneuver].condicion;
	document.querySelector(slotId + " .manDesc").textContent = maniobras[maneuver].descripcion;
	document.querySelector(slotId + " .drawButton").style.display = "none";
	document.querySelector(slotId + " .card").style.display = "grid";

}