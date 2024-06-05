const hamburger = document.querySelector(".hamburger")
const nav_menu = document.querySelector(".nav-menu")

hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav_menu.classList.remove("active");
}))

document.addEventListener('DOMContentLoaded', function() {
  const phoneButton = document.getElementById('phoneButton');
  const contactInfo = document.getElementById('contactInfo');

  // Mostrar/ocultar el contenedor de información al hacer clic en el botón del teléfono
  phoneButton.addEventListener('click', function(event) {
    contactInfo.classList.toggle('show');
    event.stopPropagation(); // Evita que el clic en el botón cierre inmediatamente el contenedor
  });

  // Ocultar el contenedor de información al hacer clic en cualquier lugar fuera de él
  document.addEventListener('click', function(event) {
    if (contactInfo.classList.contains('show')) {
      contactInfo.classList.remove('show');
    }
  });

  // Evita que el clic dentro del contenedor de información cierre el contenedor
  contactInfo.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});

function toggleContainer() {
  var container = document.querySelector('.info-container');
  container.classList.toggle('active');
  
  // Establecer la altura del contenedor igual a la altura del botón
  var buttonHeight = document.querySelector('.subscribe-button').offsetHeight;
  container.style.height = buttonHeight + 'px';
}


// Event listener para cerrar el menú al hacer clic en cualquier lugar de la página
document.addEventListener('click', function(event) {
  var container = document.querySelector('.info-container');
  var button = document.querySelector('.subscribe-button');
  
  // Si el clic no es dentro del contenedor ni del botón, cierra el menú
  if (!container.contains(event.target) && !button.contains(event.target)) {
    container.classList.remove('active');
  }
});

document.getElementById('toggleButton').addEventListener('click', function() {
  var infoDiv = document.getElementById('info');
  infoDiv.classList.toggle('show');
});
