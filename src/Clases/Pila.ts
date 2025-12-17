import { Carta } from "./Carta.js";
import { NodoCarta } from "./NodoCarta.js";

export class Mazo {
  Top: NodoCarta | null;

  constructor() {
    this.Top = null;
  }

  push(carta: Carta): void {
    const nodo = new NodoCarta(carta);
    nodo.siguiente = this.Top;
    this.Top = nodo;
  }

  pop(): Carta | null {
    if (!this.Top) return null;
    const carta = this.Top.carta;
    this.Top = this.Top.siguiente;
    return carta;
  }

  peek(): Carta | null {
    return this.Top ? this.Top.carta : null;
  }

  estaVacio(): boolean {
    return this.Top === null;
  }

  crearMazoInicial(): void {
    const palos = ['Corazones', 'Diamantes', 'Picas', 'Tréboles'];
    for (const palo of palos) {
      for (let rango = 2; rango <= 14; rango++) {
        this.push(new Carta(rango, palo));
      }
    }
  }

  barajar(): void {
    if (this.estaVacio()) return;
      const cartas: Carta[] = [];
      while (!this.estaVacio()) {
        cartas.push(this.pop()!);
      }
      for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j]!, cartas[i]!];
      }
      for (const carta of cartas) {
      this.push(carta);
    }
  }
}
