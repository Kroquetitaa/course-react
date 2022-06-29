
const tecnologias = ['HTML','CSS','JavaScript','React','Node.js'];

const nuevoArray = tecnologias.map( tech => {
    if( tech === 'HTML' ){
        return 'GraphQL';
    } else {
        return tech;
    }
});

const nuevoArray2 = tecnologias.filter( tech => {
    return tech === 'React';
});

console.log( nuevoArray );
console.log( nuevoArray2 );