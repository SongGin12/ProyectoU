import { Carta } from "./Carta.js";
import { NodoCartaDoble } from "./NodoCartaDoble.js";

export class ColumnaTablero {
    top: NodoCartaDoble | null = null;
    bottom: NodoCartaDoble | null = null; // (RIVAN-NOTA) Esta vaina indica cuál es la carta que está **al fondo de la columna**, es decir, la última carta de la lista doblemente enlazada.

    insertarFinal(carta: Carta): void {
        const nodo = new NodoCartaDoble(carta);
        if (!this.top) {
        this.top = nodo;
        this.bottom = nodo;
        }
        else {
        nodo.anterior = this.bottom;
        this.bottom!.siguiente = nodo;
        this.bottom = nodo;
        }
    }

    eliminarNodo(nodo: NodoCartaDoble): void {
        if (nodo.anterior) {
        nodo.anterior.siguiente = nodo.siguiente;
        }
        else {
        this.top = nodo.siguiente;
        }
        if (nodo.siguiente) {
        nodo.siguiente.anterior = nodo.anterior;
        }
        else {
        this.bottom = nodo.anterior;
        }
        nodo.anterior = null;
        nodo.siguiente = null;
    }

    recorrerAdelante(): Carta[] {
        const resultado: Carta[] = [];
        let actual = this.top;
        while (actual) {
        resultado.push(actual.carta);
        actual = actual.siguiente;
        }
        return resultado;
    }

    recorrerAtras(): Carta[] {
        const resultado: Carta[] = [];
        let actual = this.bottom;
        while (actual) {
        resultado.push(actual.carta);
        actual = actual.anterior;
        }
        return resultado;
    }

    obtenerTamaño(): number {
        let count = 0;
        let actual = this.top;
        while (actual) {
        count++;
        actual = actual.siguiente;
        }
        return count;
    }

    estaLlena(): boolean {
        return this.obtenerTamaño() >= 3;
    }
}
