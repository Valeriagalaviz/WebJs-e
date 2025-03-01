//Variables, comparaciones y toma de decisiones en JavaScript

/*Práctica 2. Proyecto que evalua la nota de un estudiante 
y le asigna un mensaje basado en la nota.*/

//Declaramos la variable nota y le pedimos al usuario ingresarla
var nota = prompt("Ingrese la nota obtenida");

//Realizamos la condicional
if (nota > 0){
    if(nota >=90){
        console.log(`Excelente, has aprobado con un: ${nota} 😁`);
    }else if (nota >=75 && nota <=89){
        console.log(`Bien, has aprobado con un: ${nota} 😊`);
    }else if (nota >=60 && nota <=74){
        console.log(`Suficiente, has aprobado con un: ${nota} 🙂`);
    }else if (nota <60){
        console.log(`No has aprobado con un: ${nota} 😞`);
    }
}else{
    alert("Ingrese una nota valida");
}
