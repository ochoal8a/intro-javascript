const persona = {
  nombre: "Juan",
  apellido: "Mendieta",
  edad: 45,
  direccion: {
    ciudad: "Ecatepec",
    zip: 82836726372,
    lat: 817281,
    lng: 651623123,
  },
};

console.log({ persona });

const persona2 = {...persona };
persona2.nombre = 'Peter';

console.log(persona2);
console.log({ persona });