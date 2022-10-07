import heroes, { owners} from "../data/heroes";

//import { owners } from "./data/heroes";




//console.log( heroes);

const getHeroeById = (id) =>  heroes.find( (heroe) => 
    heroe.id === id
);


 //console.log(getHeroeById(2));

// const getHeroeByOwner = (owner) => heroes.filter( (heroe) => 
// heroe.id === owner
// );

// console.log(getHeroeByOwner ('DC'));

export default getHeroeById;