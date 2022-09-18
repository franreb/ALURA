console.log("Asignando Valores a las variables")

const miNombre = "Leonardo";
const miApellido = "Lacruz";
console.log(miNombre);

const miNombreCompleto = miNombre + " " + miApellido;
console.log(miNombreCompleto);

const textoMiNombre = `Mi nombre es: ${miNombre} ${miApellido}`;
console.log(textoNombre);

let variableTexto = "Un texto";   //JavaScript no es un codigo Fuertemente Tipado lo que signigica que
console.log(variableTexto)        //Hace conversiones rapidas de tipo de datos. Puede pasar de ser un
                                  //String y convertirlo en Entero,Decimal o Booleano.
variableTexto = 10;
console.log(variableTexto);

variableTexto = 10.5;
console.log(variableTexto);

variableTexto = false;
console.log(variableTexto);