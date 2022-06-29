
const autenticado = true;

autenticado ? console.log('usuario autenticado') : console.log('No autenticado');

// Doble ternario

const saldo = 500;
const pagar = 600;
const tarjeta = true;

saldo > pagar ? 
console.log('Puedes pagar') : 
tarjeta ? 
console.log('Puedes pagar con tarjeta') : console.log('No no puedes pagar');
