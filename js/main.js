let menuBtn = document.getElementById("menu");
let menuOpciones = document.getElementById("menu-lat");
let mailBtn = document.getElementById("enviar-mail");
let i = 0;


menuBtn.addEventListener("click",()=>{
    menuOpciones.style.display = "block";
    menuOpciones.className === "menu-lat-entrada" ? menuOpciones.className = "menu-lat-salida" :  menuOpciones.className = "menu-lat-entrada"; 
})

window.addEventListener("scroll", () => {
    let posicionUsuario = window.scrollY;
    let botonesMenu = document.querySelectorAll("#menu-lat .menu-btn"); 
  
    if (posicionUsuario < 1500) {
      i = 0;
    } else if (posicionUsuario > 1499 && posicionUsuario < 2500) {
      i = 1;
    } else if (posicionUsuario > 2499 && posicionUsuario <3200) {
      i = 2;
    } else {
      i = 3;
    }
    // Iterar sobre los botones del menú y modificar la clase del botón específico según el índice 'i'
    botonesMenu.forEach((boton, index) => {
      if (index === i) {
        boton.classList.add("ubicacion-usuario");
      } else {
        boton.classList.remove("ubicacion-usuario"); // Restablecer la clase de los demás botones si es necesario
      }
    });
});

//------------Proyectos efecto hover ----------------//


document.getElementById('contenedor-proyectos').onmousemove = e => {
  for (const card of document.getElementsByClassName('caja-proj')) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x',`${x}px`);
    card.style.setProperty('--mouse-y',`${y}px`);
  }
} 