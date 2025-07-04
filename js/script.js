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
    const url = './image/CV_GonzaloRaniti.pdf';
    window.open(url, '_blank');
}

// Animaciones de scroll
function animarElementos() {
    const elementos = document.querySelectorAll('.sobremi, .skills, .portfolio, .contacto');
    
    elementos.forEach(elemento => {
        const rect = elemento.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.8) {
            elemento.style.opacity = '1';
            elemento.style.transform = 'translateY(0)';
        }
    });
}

// Efecto de escritura para el título
function efectoEscritura() {
    const titulo = document.querySelector('.inicio .contenido-banner h1');
    if (titulo) {
        const texto = titulo.textContent;
        titulo.textContent = '';
        titulo.style.borderRight = '2px solid #1CB698';
        
        let i = 0;
        const escribir = () => {
            if (i < texto.length) {
                titulo.textContent += texto.charAt(i);
                i++;
                setTimeout(escribir, 100);
            } else {
                titulo.style.borderRight = 'none';
            }
        };
        escribir();
    }
}

// Efecto de contador para las skills
function animarSkills() {
    const skillElements = document.querySelectorAll('.knowledge div, .tools div');
    
    skillElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Efecto hover mejorado para proyectos
function mejorarProyectos() {
    const proyectos = document.querySelectorAll('.portfolio .galeria .proyecto');
    
    proyectos.forEach(proyecto => {
        proyecto.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(28, 182, 152, 0.3)';
        });
        
        proyecto.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Efecto de carga de página
function cargarPagina() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        efectoEscritura();
        setTimeout(animarSkills, 2000);
    }, 100);
}

// Boton enviar!

document.addEventListener("DOMContentLoaded", () => {
    // Inicializar animaciones
    cargarPagina();
    mejorarProyectos();
    
    // Agregar listener para scroll
    window.addEventListener('scroll', animarElementos);
    
    // Ejecutar una vez al cargar
    animarElementos();
});


