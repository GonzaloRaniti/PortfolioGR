let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


// DESCARGAR CV

function descargarCV() {
    const url = './image/CurriculumGonzaloRaniti.pdf'
    window.open(url, '_blank');
}


// Boton enviar!

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("#contacto form");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const datosFormulario = new FormData(formulario);
        const datos = Object.fromEntries(datosFormulario.entries());
        console.log("Datos del formulario:", datos);
        setTimeout(() => {
            formulario.reset();
            console.log("El contenido del formulario se ha borrado.");
        }, 1000);
    });
});


