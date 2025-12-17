const carta = document.getElementById("carta1");

// Verificamos que la carta exista
if (carta) {

  // Animación al colocar la carta
  function animarColocarCarta() {
    carta.classList.add("animate__animated", "animate__slideInUp");
  }

  // Animación al eliminar la carta
  function animarEliminarCarta() {
    carta.classList.add("animate__animated", "animate__hinge");

    setTimeout(() => {
      carta.remove(); // elimina del tablero
    }, 2000);
  }

  // Simula colocar la carta al cargar la página
  animarColocarCarta();

  // Click para simular ataque/eliminación
  carta.addEventListener("click", animarEliminarCarta);

  // Limpia las clases después de cada animación
  carta.addEventListener("animationend", () => {
    carta.classList.remove(
      "animate__animated",
      "animate__slideInUp",
      "animate__hinge"
    );
  });

}
