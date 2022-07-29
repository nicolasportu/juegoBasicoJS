function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
  let resultado = "";

  if (jugada == 1) {
    resultado = "Piedra";
  } else if (jugada == 2) {
    resultado = "Papel";
  } else if (jugada == 3) {
    resultado = "Tijera";
  } else {
    resultado = "Mala eleccion";
  }

  return resultado;
}

let jugador = 0;
let pc = 0;
let triunfo = 0;
let derrota = 0;

while (triunfo < 3 && derrota < 3) {
  pc = aleatorio(1, 3);
  jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

  alert("Pc elige: " + eleccion(pc));
  alert("Vos elegis: " + eleccion(jugador));

  if (pc == jugador) {
    alert("EMPATE");
  } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
    alert("GANASTE");
    triunfo++;
  } else {
    alert("PERDISTE");
    derrota++;
  }
}

alert("Ganaste " + triunfo + " veces. Perdiste " + derrota + " veces.");
