console.log("Trabajando con Operaciones Logicas");



const ciudadesLatinas = new Array();

ciudadesLatinas.push('Bogota');
ciudadesLatinas.push('Buenos Aires');
ciudadesLatinas.push('Lima');

console.log(ciudadesLatinas);

const edadComprador = 15;
const estaAcompaniado = false;
const tienePasaje = true;
const ciudadDestino = 'Lima';
let posicion = 0;

if (edadComprador >= 18 || estaAcompaniado) {
    console.log("El comprador es Mayor de Edad");
    console.log(ciudadesLatinas);
    console.log("Es Posible vender Viajes");
    console.log(`Ciudades Disponibles para Viajes`);
    console.log(ciudadesLatinas);

} else {
    console.log(`El comprador menor de edad no esta Acompaniado`);
}

//Proceso de Embarque

if (tienePasaje && (edadComprador >= 18 || estaAcompaniado)){
    console.log(`Comprador con Pasaje`);

} else {
    console.log(`Comprador sin Pasaje. No es Posible`);
}
