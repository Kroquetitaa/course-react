const producto = {
    nombre: 'tablet',
    precio: 300,
    disponible: true,
}

const cliente = {
    nombre: 'Juan',
    premium: true,
}

const nuevoObjeto = Object.assign( producto, cliente);
console.log( nuevoObjeto );