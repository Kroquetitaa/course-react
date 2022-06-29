
// Scope - Alcance de una variable

const precio = 300

function unaFuncion(){
    const precio = 600
    console.log( precio );
}

console.log( precio );

unaFuncion();