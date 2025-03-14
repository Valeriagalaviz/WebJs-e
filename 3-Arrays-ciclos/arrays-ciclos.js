//Array de objetos de frutas

let frutas = [
    {
        nombre: "Manzana",
        color: "Rojo"
    },
    {
        nombre: "Pera",
        color: "Verde"
    },
    {
        nombre: "Sandia",
        color: "Verde"
    },
    {
        nombre: "Melon",
        color: "Naranja"
    },
    {
        nombre: "Mango",
        color: "Amarillo"
    },
    {
        nombre: "Kiwi",
        color: "Verde"
    },
    {
        nombre: "Fresa",
        color: "Rojo"
    },
    {
        nombre: "Zarzamora",
        color: "Morado"
    },
    {
        nombre: "Platano",
        color: "Amarillo"
    },
    {
        nombre: "Mandarina",
        color: "Naranja"
    },
    {
        nombre: "Uva",
        color: "Morado"
    },
    {
        nombre: "Cereza",
        color: "Rojo"
    },
    {
        nombre: "Naranja",
        color: "Naranja"
    },
    {
        nombre: "Guayaba",
        color: "Amarillo"
    }
]
let msj = "";
let msjA = "";
let msjV = "";
let msjN = "";
let msjM = "";
let contador = 0;
let contadorA = 0;
let contadorV = 0;
let contadorN = 0;
let contadorM = 0;

for (let i=0; i<frutas.length; i++){
    const element = frutas[i];
    if (element.color == "Rojo"){
        msj += `<b>${i+1}.</b> ${element.nombre} es de color rojo 🟥 <br>`;
        contador++;
    }else if (element.color == "Amarillo"){
        msjA += `<b>${i+1}.</b> ${element.nombre} es de color amarillo 🟨 <br>`;
        contadorA++;
    }else if (element.color == "Verde"){
        msjV += `<b>${i+1}.</b> ${element.nombre} es de color verde 🟩 <br>`;
        contadorV++;
    }else if (element.color == "Naranja"){
        msjN += `<b>${i+1}.</b> ${element.nombre} es de color naranja 🟠 <br>`;
        contadorN++;
    }else if (element.color == "Morado"){
        msjM += `<b>${i+1}.</b> ${element.nombre} es de color morado 🟪 <br>`;
        contadorM++;
    }
}

document.write(`<br>Las frutas rojas son ${contador}:<br>`+msj);

document.write(`<br>Las frutas amarillas son ${contadorA}:<br>`+msjA);

document.write(`<br>Las frutas verdes son ${contadorV}:<br>`+msjV);

document.write(`<br>Las frutas naranjas son ${contadorN}:<br>`+msjN);

document.write(`<br>Las frutas moradas son ${contadorM}:<br>`+msjM);
