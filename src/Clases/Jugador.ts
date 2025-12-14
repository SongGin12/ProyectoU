import { Mazo } from "./ListaCircular.js";
import { PilaDescarte } from "./Pila_Descarte.js";
import { Tablero } from "./Tablero.js";
import { ListaHistorial } from "./ListaDoble.js";

export class Jugador {
  nombre: string;
  tablero: Tablero;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.tablero = new Tablero();
  }

  jugarTurno(
    mazo: Mazo,
    oponente: Jugador,
    pilaDescarte: PilaDescarte,
    historial: ListaHistorial,
    fila: number,
    columna: number
  ): boolean {

    // 1. Robar carta
    var carta = mazo.robarCarta();
    if (carta === null) {
      return false;
    }
    var colocado = this.tablero.colocarCarta(carta, fila, columna);
    if (!colocado) {
      return false;
    }
    oponente.tablero.eliminarCartasPorRango(carta.getRango(), pilaDescarte);
    historial.agregar(
      historial.obtenerNumeroTurno() + 1,
      this.nombre,
      carta.toString(),
      fila,
      columna,
      [] 
    );
    return true;
  }
  calcularPuntuacion(): number {
    return this.tablero.calcularPuntuacion();
  }
}
