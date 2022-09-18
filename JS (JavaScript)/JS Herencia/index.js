/*Importación de clases*/
import {Cliente} from './Cliente.js'
//import {CuentaCorriente} from './CuentaCorriente.js';
//import {CuentaAhorro} from './CuentaAhorro.js';
import { Cuenta } from './Cuentas/Cuenta.js';
import { CuentaAhorro } from './Cuentas/CuentaAhorro.js';
import { CuentaCorriente } from './Cuentas/CuentaCorriente.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Director } from './Empleados/Director.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';


const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('1111');
console.log(SistemaAutenticacion.login(cliente,'1111'));

const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Franco Rebe','6873241374',10000);
const gerente = new Gerente('Luigi','65465743',12000);
const director = new Director('Mar La Explotaroda','6666666',15000);

//*console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());//*


empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado,'123452'));
