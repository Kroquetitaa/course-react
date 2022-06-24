
//Objetos

const producto = {
    nombre: 'Tablet',
    precio: '300',
    disponible: true,
}

console.log( producto );
console.table( producto );
console.log( producto.nombre );
console.log( producto.precio );
console.log( producto.disponible );

// Destructuring

const { nombre, precio, disponible } = producto;

console.log( nombre, precio, disponible );

// Object Literal Enhacement
const autenticado = true;
const usuario = 'Sergio';

const nuevoObjeto = {
    autenticado: autenticado,
    usuario: usuario,
}

console.table( nuevoObjeto );