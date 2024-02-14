interface BotonInterface {
    add(): void;
    rest(): void;
}

class GrupoBot implements BotonInterface {
    private contador: number;

    constructor() {
        this.contador = 0;
        $('#addButton').click(this.add.bind(this));
        $('#restButton').click(this.rest.bind(this));
    }

    add() {
        this.contador++;
        const boton = new Boton(this.contador); // Instancia del Boton
        $('#buttonsContainer').append(boton.element); // Agregar directamente el elemento del botón al contenedor
    }

    rest() {
        if (this.contador > 0) {
            this.contador--;
            $('#buttonsContainer button:last-child').remove();
        }
    }
}

class Boton {
    element: JQuery<HTMLElement>; // Propiedad para almacenar el elemento jQuery del botón

    constructor(private contador: number) {
        const button = $('<button>').text('Botón ' + this.contador);
        button.click(() => {
            alert('¡Hola desde el botón ' + this.contador + '!');
        });
        this.element = button; // Guardar una referencia al elemento del botón creado
    }
}

// window.onload = function() {
//     const grupoBot = new GrupoBot();}
