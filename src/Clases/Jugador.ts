import { Mazo } from "./Pila.js";
import { PilaDescarte } from "./Pila_Descarte.js";
import { Tablero } from "./Tablero.js";
import { ListaHistorial } from "./ListaHistorial.js";

export class Jugador {
  nombre: string;
  tablero: Tablero;
  barajadasRestantes: number = 3;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.tablero = new Tablero();
  }

  jugarTurno(
    mazo: Mazo,
    oponente: Jugador,
    pilaDescarte: PilaDescarte,
    historial: ListaHistorial
  ): boolean {
    const carta = mazo.pop();
    if (!carta) return false;

    let colocado = false;
    let columnaColocada = -1;
    for (let col = 0; col < 3 && !colocado; col++) {
      colocado = this.tablero.colocarCarta(carta, col);
      if (colocado) columnaColocada = col;
    }

    if (!colocado) return false;

    for (let col = 0; col < 3; col++) {
      oponente.tablero.eliminarCartasPorRangoEnColumna(carta.getRango(), col, pilaDescarte);
    }

    historial.agregar(
      historial.obtenerNumeroTurno() + 1,
      this.nombre,
      carta.toString(),
      columnaColocada,
      []
    );

    return true;
  }

  calcularPuntuacion(): number {
    return this.tablero.calcularPuntuacion();
  }
}
