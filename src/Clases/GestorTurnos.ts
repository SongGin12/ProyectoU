import { Jugador } from "./Jugador.js";

class NodoJugador {
    jugador: Jugador;
    siguiente: NodoJugador | null = null;

    constructor(jugador: Jugador) {
        this.jugador = jugador;
    }
}

export class GestorTurnos {
    private actual: NodoJugador | null = null;

    agregarJugador(jugador: Jugador) {
        const nodo = new NodoJugador(jugador);
        if (!this.actual) {
            nodo.siguiente = nodo;
            this.actual = nodo;
        } 
        else {
            nodo.siguiente = this.actual.siguiente;
            this.actual.siguiente = nodo;
        }
    }

    obtenerJugadorActual(): Jugador | null {
        return this.actual ? this.actual.jugador : null;
    }

    avanzarTurno() {
        if (this.actual) {
            this.actual = this.actual.siguiente;
        }
    }
    
    mostrarOrden() {
        if (!this.actual) return;
        const inicio = this.actual;
        let nodo = inicio;
        const nombres: string[] = [];
        do {
            nombres.push(nodo.jugador.nombre);
            nodo = nodo.siguiente!;
        } while (nodo !== inicio);
        console.log("Orden jugadores:", nombres.join(" -> "));
    }
}
