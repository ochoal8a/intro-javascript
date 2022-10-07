// Desestructuracion
// Asignacion desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "IronMan",
  rango: "Soldado",
};

// const { nombre, edad, clave } = persona;

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const Contexto = ({ clave, nombre, edad, rango = "Capitan" }) => {
  console.log(nombre, edad, rango);

  return {
    nombreClave: clave,
    anios: edad,
    coordenadas: {
      lat: 14.111,
      lng: 14.444
    }
  };
};

const { nombreClave, anios, coordenadas:{lat, lng} } = Contexto(persona);
//const { lat, lng } = coordenadas;
console.log(nombreClave);
console.log(anios);
console.log(lat);
console.log(lng);