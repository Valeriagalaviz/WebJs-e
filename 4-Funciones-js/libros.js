//Funcion con array
let libros = [];
//Funcion agregar libros 
function agregarLibros(){
    let libro = prompt("Ingrese un libro");

    while ( libro != "parar") {
        libros.push(libro);
        libro = prompt("Ingrese un libro");
    }
    //return agregarLibros.length
}
//Funcion mostrar libros
function mostrarLibros(array){
    for(let i=0;i<array.length;i++){
        //console.log(`${i+1}.- ${array[i]}`);
        document.write(`<h1>${i+1}.- ${array[i]}</h1>`);
    }
}
//Llamamos a las funciones
agregarLibros();
//Llamamos a la funcion mostrar libros y le pasamos el array de libros
mostrarLibros(libros);
