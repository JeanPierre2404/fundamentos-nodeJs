// 1.declaracion habitual

function suma(a, b) {
    return a + b;
}
//2. declaracion com ofuncion flecha

let resta = (a, b) => {
    return a - b;
}

//3.definicion simplificada
let multiplicar = (a, b) => a * b;

let sum = suma(5, 9);

console.log(sum);

console.log(resta(8, 3));

console.log(multiplicar(4, 5));

//saludoss
let saludar = (nombre) => {
    return `Hola ${nombre}, cómo estas?`;

}
console.log(saludar("Jean"));

let saludos = (nombres) => `HOLA ${nombres}, cómo estas?`;
console.log(saludos("WILSON"));