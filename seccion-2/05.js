
// Objetos - Manipulacion

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true,
}
// Freeze no te deja modificarlo mientras que seal solo te deja modificar las propiedades existentes
Object.freeze( producto );
Object.seal( producto );

producto.nombre = 'Monitor Curvo';
// Si no existe lo va a añadir
producto.imagen = 'imagen.jpg';

delete producto.calificaciones;

console.table( producto );