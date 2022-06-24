// Tipos de datos

//Undefined

let cliente;
console.log( typeof cliente );

// Boolean
const descuento = false;
console.log( descuento );
console.log( typeof descuento );

// Number
const numero1 = 20.20;
const numero2 = 30;
const numero3 = -100;

console.log( typeof numero1);
console.log( typeof numero2);
console.log( typeof numero3);

// Strings o Cadenas de texto
const alumno = 'Sergio';
let producto = 'Monitor 20 pulgadas';

const numero4 = "30";
const numero5 = 30;

console.log( typeof numero4 );
console.log( typeof numero5 );

// BigInt
const numeroGrande = BigInt(912481758125125125124124124);
console.log( typeof numeroGrande );

const numero6 = 10;
const numero7 = 20;
console.log( numero6 + Number( numeroGrande));

// Symbol
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);
console.log( primerSymbol === segundoSymbol );
console.log( primerSymbol.valueOf() );
console.log( segundoSymbol.valueOf() );

//Null
const descuentos = null;
console.log( typeof descuentos ); 