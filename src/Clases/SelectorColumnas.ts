export class NodoSelector {
    indiceColumna: number;
    anterior: NodoSelector;
    siguiente: NodoSelector;

    constructor(indice: number) {
        this.indiceColumna = indice;
        this.anterior = this;
        this.siguiente = this;
  }
}

export class SelectorColumnas {
    actual: NodoSelector;

    constructor() {
        const nodo0 = new NodoSelector(0);
        const nodo1 = new NodoSelector(1);
        const nodo2 = new NodoSelector(2);

        nodo0.siguiente = nodo1;
        nodo1.anterior = nodo0;

        nodo1.siguiente = nodo2;
        nodo2.anterior = nodo1;

        nodo2.siguiente = nodo0;
        nodo0.anterior = nodo2;

        this.actual = nodo0;
    }

    moverDerecha() {
        this.actual = this.actual.siguiente;
    }

    moverIzquierda() {
        this.actual = this.actual.anterior;
    }

    obtenerColumnaActual(): number {
        return this.actual.indiceColumna;
    }
}
