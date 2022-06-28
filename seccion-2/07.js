const producto = {
    nombre: 'tablet',
    precio: 300,
    disponible: true,
}

const cliente = {
    nombre: 'Juan',
    premium: true,
}

const nuevoObjeto2 = { 
    producto: {...producto}, 
    cliente: {...cliente},
};
console.log( nuevoObjeto2 );

// const nuevoObjeto = Object.assign( producto, cliente);
// console.log( nuevoObjeto );