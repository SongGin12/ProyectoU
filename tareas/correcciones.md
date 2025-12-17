# 🔧 Tareas de Correcciones

> Correcciones de estructuras de datos según especificación del proyecto.

---

## Correcciones Críticas de Estructura

### Mazo de Robo (Pila/Stack)

- [ ] **Renombrar `ListaCircular.ts` a `Pila.ts` o `Stack.ts`**  
  El nombre actual es confuso. Debe reflejar comportamiento LIFO.

- [ ] **Cambiar clase `Mazo` a comportamiento de Pila real**  
  - Remover lógica circular (`cola.siguiente = cabeza`)
  - Implementar `push(carta)` para agregar al tope
  - Implementar `pop()` que remueva y retorne el tope
  - Implementar `peek()` para ver tope sin remover
  - Usar propiedad `Top` en lugar de `cabeza/cola`

- [ ] **Actualizar método `crearMazoInicial()`**  
  Usar `push()` repetido para construir el mazo inicial.

- [ ] **Corregir `barajar()`**  
  Después de barajar array temporal, reconstruir pila con `push()`.

---

### Pila de Descarte (Pila LIFO)

- [ ] **Corregir `Pila_Descarte.ts` - método `insertarFin()` es incorrecto**  
  Actualmente inserta al final (comportamiento de cola, no pila).  
  - Renombrar a `push()` e insertar al inicio (Top)
  - Agregar `pop()` para sacar del tope

- [ ] **Eliminar recorrido O(n) en inserción**  
  El while que busca el final es innecesario en una pila.  
  Inserción debe ser O(1) siempre.

---

### Columnas del Tablero (3 Listas Doblemente Enlazadas)

- [ ] **Refactorizar `Tablero.ts` - reemplazar `casillas: (Carta | null)[][]`**  
  Cambiar de array 2D a 3 listas doblemente enlazadas (una por columna).

- [ ] **Crear clase `NodoCartaDoble`**  
  ```
  clase NodoCartaDoble {
    carta: Carta
    anterior: NodoCartaDoble | null
    siguiente: NodoCartaDoble | null
  }
  ```

- [ ] **Crear clase `ColumnaTablero` (Lista Doblemente Enlazada)**  
  Métodos:
  - `insertarFinal(carta)` - agregar carta al fondo de columna
  - `eliminarNodo(nodo)` - reconectar `anterior.siguiente = siguiente` en O(1)
  - `recorrerAdelante()` - para calcular puntuación
  - `recorrerAtras()` - para detectar escaleras
  - `obtenerTamaño()` - máximo 3 cartas

- [ ] **Modificar `Tablero` para usar 3 columnas**  
  ```
  columnas: [ColumnaTablero, ColumnaTablero, ColumnaTablero]
  ```

- [ ] **Actualizar `eliminarCartasPorRangoEnColumna()`**  
  Usar reconexión de lista doble O(1) en lugar de `casillas[f][c] = null`.

- [ ] **Actualizar `calcularPuntuacionColumna()`**  
  Recorrer lista doble en lugar de acceso por índice.

---

### Gestor de Turnos (Lista Circular Simple)

- [ ] **Crear nueva clase `GestorTurnos` en archivo separado**  
  Implementar como lista circular simple.

- [ ] **Estructura del nodo**  
  ```
  clase NodoJugador {
    jugador: Jugador
    siguiente: NodoJugador  // circular: último apunta al primero
  }
  ```

- [ ] **Métodos requeridos**:
  - `avanzarTurno()` - mover puntero actual al siguiente (sin condicionales)
  - `obtenerJugadorActual()` - retorna jugador del nodo actual
  - `agregarJugador(jugador)` - para escalabilidad (3+ jugadores)

- [ ] **Integrar en `Juego.ts`**  
  Reemplazar `turno: number` con `gestorTurnos: GestorTurnos`.

- [ ] **Eliminar lógica `turno % 2` en `ejecutarJuego()`**  
  Usar `gestorTurnos.avanzarTurno()` directamente.

---

### Historial (Lista Enlazada Simple)

- [ ] **Simplificar `ListaDoble.ts` a Lista Enlazada Simple**  
  Remover propiedad `anterior` de `NodoHistorial` (no se necesita).

- [ ] **Renombrar archivo a `ListaHistorial.ts`**  
  Nombre más descriptivo.

- [ ] **Verificar que solo use operaciones de lista simple**:
  - `agregar()` al final (append)
  - Recorrido solo hacia adelante
  - Sin necesidad de `anterior`

---

### Selector de UI (Lista Circular Doblemente Enlazada) - NUEVA

- [ ] **Crear nueva clase `SelectorColumnas`**  
  Lista circular doble con 3 nodos (uno por columna).

- [ ] **Estructura del nodo**  
  ```
  clase NodoSelector {
    indiceColumna: number  // 0, 1, 2
    anterior: NodoSelector  // circular
    siguiente: NodoSelector // circular
  }
  ```

- [ ] **Métodos requeridos**:
  - `moverDerecha()` - avanzar al siguiente (col 2 → col 0)
  - `moverIzquierda()` - retroceder al anterior (col 0 → col 2)
  - `obtenerColumnaActual()` - índice de columna seleccionada

- [ ] **Integrar con UI**  
  Conectar con eventos de teclado ← →.

---

## Correcciones en `index.html`

- [ ] **Eliminar lógica JavaScript duplicada**  
  El `<script>` en index.html duplica lógica de clases TypeScript.  
  Debe usar las clases compiladas de `src/`.

- [ ] **Reemplazar `tableros = [Array(9).fill(null), ...]`**  
  Debe instanciar objetos `Tablero` reales.

- [ ] **Integrar clases TypeScript compiladas**  
  Importar módulos o usar bundle.
