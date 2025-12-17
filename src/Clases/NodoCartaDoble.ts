import { Carta } from "./Carta.js";

export class NodoCartaDoble {
  carta: Carta;
  anterior: NodoCartaDoble | null = null;
  siguiente: NodoCartaDoble | null = null;

  constructor(carta: Carta) {
    this.carta = carta;
  }
}
