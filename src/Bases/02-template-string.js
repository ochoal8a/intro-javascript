

const nombre = 'Luis';
const apellido = 'Ochoa';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${ apellido } ${ 1 + 1 }`;
console.log(nombreCompleto);

console.log(`Esto es un saludo papus ${ getSaludo(nombreCompleto)}`)

function getSaludo(nombre){
  return 'Hola mundo ' + nombre;
}