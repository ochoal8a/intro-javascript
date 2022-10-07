const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes; // ignora al primero y al segundo
// console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();

// console.log(letras);
// console.log(numeros);

// Tarea:
// 1. el primer valor del arr se llamara nombre
// 2.- el segundo se llamara setNombre

const DataInfo = (valor) => {
  return [
    valor,
    (valor) => {
      console.log(`Hola ${valor}`);
    },
  ];
};

const [nombre, setNombre] = DataInfo("Goku");

console.log(nombre);
setNombre('Chaval');
//setNombre()
