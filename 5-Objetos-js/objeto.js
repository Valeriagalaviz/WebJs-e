const libro = {
    titulo: "El senor de los anillos",
    autor: "JRR Tolkien",
    anio: 1954,
    estado: "disponible",
    describirLibro: function() {
        return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}`
    }
}
const libro2 ={
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J. K. Rowling",
    anio: 1997,
    estado: "disponible",
    describirLibro: function() {
            return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}`
    }
}


console.log(libro.describirLibro());

const descr = document.getElementById("libro");
const descr2 = document.getElementById("libro2");

function mostrarLibro() {
    descr.innerText = libro.describirLibro();
}

function mostrarLibro2() {
    descr2.innerText = libro2.describirLibro();
}
