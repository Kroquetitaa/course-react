
function sumar( numero, numero2){
    return {
        resultado : [numero + numero2],
        mensaje: 'Hola mundo',
    }
}

const { resultado, mensaje } = sumar( 20, 30 );
console.log( resultado, mensaje );