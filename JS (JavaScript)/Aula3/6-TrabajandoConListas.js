console.log("Trabajando con listas");



const ciudadesLatinas = new Array();

ciudadesLatinas.push('Bogota');
ciudadesLatinas.push('Buenos Aires');
ciudadesLatinas.push('Lima');

console.log(ciudadesLatinas);


const ciudadesMasVendidas = [];

ciudadesMasVendidas.push('Sao Paolo');
ciudadesMasVendidas.push('Cordoba');

const CiudadesDisponibles = ciudadesLatinas.length;
console.log(`Tenemos canditadad de ${CiudadesDisponibles} `);

ciudadesLatinas.splice(1,1)  //Elimina un elemento desde la posicion y que cantidad de elementos
console.log(CiudadesDisponibles);