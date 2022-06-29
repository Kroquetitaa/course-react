

const numero1 = 20;
const numero2 = "20";

console.log( typeof numero1 );
console.log( typeof numero2 );

if(numero1 === Number(numero2) ){
    console.log( 'Si, son iguales');
} else {
    console.log('No, no son iguales');
}