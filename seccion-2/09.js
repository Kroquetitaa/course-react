// Operaciones en los arreglos

const tecnologias = ['HTML','CSS','JavaScript','React','Node.js'];

// Añadir elementos al array
//* tecnologias.push('GraphQL'); // Añade al final del array
//* tecnologias.unshift('GraphQL2'); // añade al principo del array
//* const nuevoArreglo = [ ...tecnologias, 'GraphQL'];
// Eliminar elementos del array
//* tecnologias.pop(); // elimina del final
//* tecnologias.shift(); // Elimina del inicio
//* tecnologias.splice(2,4); // Eliminar a partir de cierto indice
// const nuevoArray = tecnologias.filter( tech => {
//     return tech != 'HTML';
// });

// Reemplazar elementos del array
// tecnologias[0] = 'GraphQL';

const nuevoArray = tecnologias.map( tech => {
    if( tech === 'HTML'){
        return 'GraphQL';
    } else {
        return tech;
    }
})

console.table( tecnologias );
// console.table( tecnologias );
// console.table( nuevoArreglo );
console.table( nuevoArray );