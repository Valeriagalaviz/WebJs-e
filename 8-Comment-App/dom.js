const inputComment = document.getElementById("inputComentario");
const btnComment = document.getElementsByTagName("button")[0];
const boxComments = document.getElementsByClassName("comentarios")[0];

//array de comentarios 
const comments = [];
//Contador de comentarios
let i = 0;
let comentar = (event) => {
    //previene el comportamiento por defecto del navegador que es recargar la pagina al enviar el formulario
    event.preventDefault();
    //Crear instancia de la fecha actual y guardarla en una variable 
    const fecha = new Date();
    //Metodo para obtener la fecha actual
    const hoy = fecha.toLocaleDateString();
    //Hora actual
    const hora = fecha.toLocaleTimeString();
    //Objeto para guardar la informacion del comentario
    const comment = {
        id: i++,
        user: "Valeria",
        date: hoy,
        comment: inputComment.value,
        hour: hora
    }
    //Agrega el objeto comentario al array
    comments.push(comment);
    //Llamar a la funcion para imprimir los comentarios
    printComments(comments);
    
    inputComment.value = "";
    console.log(inputComment.value);
    
}

//Funcion para imprimir los comentarios
const printComments = (array) => {
    //Limpia la lista de comentarios
    boxComments.innerHTML = "";
    //Recorre el array
    array.forEach(item => {
        const {user, date, comment, hour} = item;
        //Agrega un nuevo comentario extraido del input al final de la lista de comentarios
        boxComments.innerHTML += `<li>${comment} <br>👤Usuario: ${user} - 🗓️Fecha: ${date} <br>🕜Hora de publicación: ${hour}</li>`
    })
}


//Asignamos el evento click al boton
btnComment.addEventListener("click", comentar);
