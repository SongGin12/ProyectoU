export class NodoHistorial {
  turno: number;
  jugador: string;
  carta: string;
  columna: number;
  eliminadas: string[];
  siguiente: NodoHistorial | null = null;

  constructor(turno: number, jugador: string, carta: string,columna: number, eliminadas: string[]){
    this.turno = turno;
    this.jugador = jugador;
    this.carta = carta;
    this.columna = columna;
    this.eliminadas = eliminadas;
  }
}

export class ListaHistorial {
  cabeza: NodoHistorial | null = null;
  cola: NodoHistorial | null = null;

  agregar(turno: number, jugador: string, carta: string, columna: number, eliminadas: string[]) {
    const nuevo = new NodoHistorial(turno, jugador, carta, columna, eliminadas);
    if (!this.cabeza) {
      this.cabeza = nuevo;
      this.cola = nuevo;
    }
    else {
      this.cola!.siguiente = nuevo;
      this.cola = nuevo;
    }
  }

  mostrar(): void {
    let actual = this.cabeza;
    while (actual) {
      console.log(`Turno ${actual.turno} - ${actual.jugador} colocó ${actual.carta} en ${actual.columna})`);
      if (actual.eliminadas.length > 0) {
        console.log(`   Eliminadas: ${actual.eliminadas.join(', ')}`);
      }
      actual = actual.siguiente;
    }
  }

  obtenerNumeroTurno(): number {
    let actual = this.cabeza;
    let contador = 0;
    while (actual) {
      contador++;
      actual = actual.siguiente;
    }
    return contador;
  }
}
