let deapool = {
    nombre: 'Wade',
    apellidos: 'Winston',
    poder: 'regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellidos} ${this.poder}`;
    }
}

console.log(deapool.getNombre());

//fomra tradicional

let nom = deapool.nombre;
let ape = deapool.apellidos;
let pod = deapool.poder;

// nueva forma, destructuracion :2

let { nombre: primerNombre, apellidos, poder } = deapool;
console.log(primerNombre, apellidos, poder);