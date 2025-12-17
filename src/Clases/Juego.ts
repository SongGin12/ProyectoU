import { Jugador } from "./Jugador.js";
import { Mazo } from "./Pila.js";
import { PilaDescarte } from "./Pila_Descarte.js";
import { ListaHistorial } from "./ListaHistorial.js";
import { GestorTurnos } from "./GestorTurnos.js";

export class JuegoRangoYPalo {
  jugador1: Jugador;
  jugador2: Jugador;
  mazo: Mazo;
  pilaDescarte: PilaDescarte;
  historial: ListaHistorial;
  gestorTurnos: GestorTurnos;

  constructor(nombre1: string, nombre2: string) {
    this.jugador1 = new Jugador(nombre1);
    this.jugador2 = new Jugador(nombre2);
    this.mazo = new Mazo();
    this.pilaDescarte = new PilaDescarte();
    this.historial = new ListaHistorial();

    this.gestorTurnos = new GestorTurnos();
    this.gestorTurnos.agregarJugador(this.jugador1);
    this.gestorTurnos.agregarJugador(this.jugador2);
  }

  iniciarJuego(): void {
    this.mazo.crearMazoInicial();
    this.mazo.barajar();
  }

  ejecutarJuego(): void {
    let juegoTerminado = false;

    while (!juegoTerminado) {
      const jugadorActual = this.gestorTurnos.obtenerJugadorActual()!;
      const oponente = jugadorActual === this.jugador1 ? this.jugador2 : this.jugador1;

      const exito = jugadorActual.jugarTurno(
        this.mazo,
        oponente,
        this.pilaDescarte,
        this.historial
      );

      if (exito) {
        this.gestorTurnos.avanzarTurno();
      }

      if (this.jugador1.tablero.estaLleno() || this.jugador2.tablero.estaLleno() || this.mazo.estaVacio()) {
        juegoTerminado = true;
      }

      this.historial.mostrar();
    }

    this.determinarGanador();
  }

  determinarGanador(): void {
    const puntaje1 = this.jugador1.tablero.calcularPuntuacion();
    const puntaje2 = this.jugador2.tablero.calcularPuntuacion();

    console.log(`Puntaje de ${this.jugador1.nombre}: ${puntaje1}`);
    console.log(`Puntaje de ${this.jugador2.nombre}: ${puntaje2}`);

    if (puntaje1 > puntaje2) {
      console.log(`Ganador: ${this.jugador1.nombre}`);
    } else if (puntaje2 > puntaje1) {
      console.log(`Ganador: ${this.jugador2.nombre}`);
    } else {
      console.log("Empate");
    }
  }
}
