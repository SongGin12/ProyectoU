# 🎴 Tareas de Animaciones

> Mejoras visuales CSS relacionadas con el diseño del juego.

---

## Animaciones de Cartas

- [ ] **Volteo de carta (Card Flip 3D)**  
  Cuando se roba del mazo, la carta debe voltear de dorso a frente con efecto 3D.  
  *Estructura: Mazo (Pila) - al hacer `pop()` se revela la carta superior*

- [ ] **Destrucción de carta enemiga**  
  Al eliminar carta del oponente por coincidencia de rango, mostrar efecto de desintegración/explosión.  
  *Estructura: Lista Doblemente Enlazada (Columna) - reconexión de nodos `anterior.siguiente = siguiente`*

- [ ] **Colocación de carta en tablero**  
  Animación suave de entrada cuando carta se posiciona en una casilla vacía.  
  *Estructura: Lista Doblemente Enlazada - inserción de nodo al final*

---

## Mejoras de Hover

- [ ] **Hover en cartas colocadas**  
  Elevación sutil con sombra al pasar mouse sobre cartas ya posicionadas.

- [ ] **Hover en slots disponibles**  
  Brillo dorado y borde iluminado en casillas donde se puede colocar carta.  
  *Estructura: Selector UI (Lista Circular Doble) - indica posiciones navegables*

- [ ] **Hover en mazo**  
  Efecto de "presión" visual al hacer click en el mazo para robar.  
  *Estructura: Mazo (Pila) - retroalimentación visual de operación `pop()`*

---

## Mejoras UI

- [ ] **Indicador de turno activo con pulso**  
  El panel del jugador activo debe tener animación de brillo pulsante continuo.  
  *Estructura: Gestor de Turnos (Lista Circular Simple) - el nodo actual determina el glow*

- [ ] **Transición animada de puntaje**  
  Cuando el puntaje cambia, el número debe "saltar" brevemente con efecto de bump.

- [ ] **Entrada animada del historial**  
  Nuevas entradas del log deben deslizarse desde la izquierda con fade-in.  
  *Estructura: Historial (Lista Enlazada Simple) - cada `append()` dispara animación*

- [ ] **Efecto de partida terminada**  
  Overlay con animación de confeti o efecto dramático al finalizar el juego.
