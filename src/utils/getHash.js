// TODO el manejo del id para los personajes
// funcion para traer una parte de la url 
// split separa los elemntos y genera un espacio vacio
const getHash = () => 
location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';


export default getHash;















