const inputComment = document.getElementById("inputComentario");
const btnComment = document.getElementsByTagName("button")[0];
const boxComments = document.getElementsByClassName("comentarios")[0];

let comentar = (event) => {
    //previene el comportamiento por defecto del navegador que es recargar la pagina al enviar el formulario
    event.preventDefault();
    //Agrega un nuevo comentario extraido del input al final de la lista de comentarios
    boxComments.innerHTML += `<li>${inputComment.value}</li>`
    //Limpia el input
    inputComment.value = "";
    console.log(inputComment.value);
}

//Asignamos el evento click al boton
btnComment.addEventListener("click", comentar);

