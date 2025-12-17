import { Carta } from "./Carta.js";
import { PilaDescarte } from "./Pila_Descarte.js";
import { ColumnaTablero } from "./ColumnaTablero.js";

export class Tablero {
  columnas: [ColumnaTablero, ColumnaTablero, ColumnaTablero];

  constructor() {
    this.columnas = [new ColumnaTablero(), new ColumnaTablero(), new ColumnaTablero()];
  }

  colocarCarta(carta: Carta, columnaIndex: number): boolean {
        const columna = this.columnas[columnaIndex];
        if (columna!.estaLlena()) return false;
        columna!.insertarFinal(carta);
        return true;
  }

  eliminarCartasPorRangoEnColumna(rangoParaEliminar: number, columnaIndex: number, pilaDescarte: PilaDescarte): void {
        const columna = this.columnas[columnaIndex];
        let actual = columna!.top;
        while (actual) {
            const siguiente = actual.siguiente;
            if (actual.carta.getRango() === rangoParaEliminar) {
                pilaDescarte.push(actual.carta);
                columna!.eliminarNodo(actual);
                console.log(`¡Ataque! Carta ${rangoParaEliminar} eliminada en columna ${columnaIndex}`);
            }
            actual = siguiente;
        }
    }

  calcularPuntuacionColumna(columnaIndex: number): number {
        const columna = this.columnas[columnaIndex];
        const cartas = columna!.recorrerAdelante();
        let suma = cartas.reduce((acc, c) => acc + c.getValor(), 0);

        // (RIVAN-NOTA) Esta vaina es para los Bonus por coincidencia de palo, RECUERDALO CHINGADA
        let bonus = 0;
        if (cartas.length >= 2) {
            if (cartas[0]!.getRango() === cartas[1]!.getRango()) bonus++;
            if (cartas.length === 3 && cartas[0]!.getRango() === cartas[2]!.getRango()) bonus++;
            if (cartas.length === 3 && cartas[1]!.getRango() === cartas[2]!.getRango()) bonus++;
        }
        if (bonus === 1) suma += 5;
        else if (bonus === 3) suma += 15;
        return suma;
    }

  calcularPuntuacion(): number {
    return this.columnas.reduce((acc, _, idx) => acc + this.calcularPuntuacionColumna(idx), 0);
  }

  estaLleno(): boolean {
    return this.columnas.every(col => col.estaLlena());
  }
}