import { Jugador } from "./Jugador.js";
import { Mazo } from "./ListaCircular.js";
import { PilaDescarte } from "./Pila_Descarte.js";
import { ListaHistorial } from "./ListaDoble.js";

export class JuegoRangoYPalo {
  jugador1: Jugador;
  jugador2: Jugador;
  mazo: Mazo;
  pilaDescarte: PilaDescarte;
  historial: ListaHistorial;
  turno: number;

  constructor(nombre1: string, nombre2: string) {
    this.jugador1 = new Jugador(nombre1);
    this.jugador2 = new Jugador(nombre2);
    this.mazo = new Mazo();
    this.pilaDescarte = new PilaDescarte();
    this.historial = new ListaHistorial();
    this.turno = 1;
  }

  iniciarJuego(): void {
    this.mazo.crearMazoInicial();
    this.mazo.barajar();
  }

  ejecutarJuego(): void {
    var juegoTerminado = false;

    while (juegoTerminado === false) {

      var jugadorActual: Jugador;
      var oponente: Jugador;

      if (this.turno % 2 === 1) {
        jugadorActual = this.jugador1;
        oponente = this.jugador2;
      } else {
        jugadorActual = this.jugador2;
        oponente = this.jugador1;
      }
      var fila = 0;
      var columna = 0;
      var encontrada = false;

      var f = 0;
      while (f < 3 && encontrada === false) {
        var c = 0;
        while (c < 3 && encontrada === false) {
          if (jugadorActual.tablero.casillas[f]![c] === null) {
            fila = f;
            columna = c;
            encontrada = true;
          }
          c = c + 1;
        }
        f = f + 1;
      }
      var exito = jugadorActual.jugarTurno(
        this.mazo,
        oponente,
        this.pilaDescarte,
        this.historial,
        fila,
        columna
      );
      if (exito === true) {
        this.turno = this.turno + 1;
      }
      if (this.jugador1.tablero.estaLleno()) {
        juegoTerminado = true;
      }
      if (this.jugador2.tablero.estaLleno()) {
        juegoTerminado = true;
      }
      if (this.mazo.estaVacio()) {
        juegoTerminado = true;
      }
    }

    this.determinarGanador();
  }

  determinarGanador(): void {
    var puntaje1 = this.jugador1.tablero.calcularPuntuacion();
    var puntaje2 = this.jugador2.tablero.calcularPuntuacion();

    console.log("Puntaje de " + this.jugador1.nombre + ": " + puntaje1);
    console.log("Puntaje de " + this.jugador2.nombre + ": " + puntaje2);

    if (puntaje1 > puntaje2) {
      console.log("Ganador: " + this.jugador1.nombre);
    } else if (puntaje2 > puntaje1) {
      console.log("Ganador: " + this.jugador2.nombre);
    } else {
      console.log("Empate");
    }
  }
}
