// funciones

const saludar = function (nombre) {
  return `Hola ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;

const saludar4 = () => `Hola mundo`;

//console.log(saludar('Juan'));

// console.log(saludar4());

const getUser = () => {
  return {
    uid: "ABd2323",
    username: "luis",
  };
};

const getUser2 = () => ({
  uid: "ABd2323",
  username: "luis",
});

// console.log(getUser2());

// Tarea
// 1.- Transformar a funcion de flecha
// 2.- Tiene que retornar un objeto implicito
// 3. Pruebas

// function getUsuarioActivo(nombre){
//    return {
//       uid:'7671231',
//       username: 'Juan Luis'
//    }
// }

const getUsuarioActivo = (nombre) => ({
  uid: "7671231",
  username: `${nombre}`,
});

const usuarioActivo = getUsuarioActivo("Luis Ochoa");
console.log(usuarioActivo);
