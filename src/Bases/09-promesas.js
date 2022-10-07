import getHeroeById from "./Bases/08-import-export";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {

//     const heroe = getHeroeById(1);
//     //console.log(heroe);
//     resolve(heroe);
//    //resolve();
//   }, 2000);
// });

// promesa.then((data) => {
//   console.log("termino la promesa", data);
// }).catch(err=> console.warn(err));

// tarea

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);

      if (heroe) {
        resolve(heroe);
      } else {
        reject({ msj: "El heroe no existe", status: "KO" });
      }

      //console.log(heroe);

      //resolve();
    }, 500);
  });
};

getHeroeByIdAsync(2)
  .then(console.log)
  .catch((result) => {
    console.log(result);
  });
