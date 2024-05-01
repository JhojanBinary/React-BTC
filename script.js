const nombre = "Jhojan";
console.log(nombre.length)



const trbajo = "Cerrajero";
job = trbajo.toUpperCase(); //toUpperCase se tiene que cerrar en parentesis
console.log(job)


//añadir un elemento mutando
const numeros = [4, 1, 3, 2, 5,]
numeros.push(77); //añadir 77 a mi lista
console.log(numeros)




const letras = ["a", "b", "c", "d"]
letras.push("easda"); //añadir strings a mi lista
console.log(letras)



//


//añadir un elemento si mutar
const list = [4,4,5,6,1]
const listaaa = list.concat(123) // digo que  que a la lista le quiero pasar el elemento 123

console.log(listaaa[5]) //imprime la posicion 5



const Jhojan = {
    nombre: "Jhojan",
    edad: "20",
    trbajo: "si",
    contextura: "delgada",
    juegostiene: ["RE2", "RE3", "GOW"]
}

console.log(Jhojan.juegostiene[1]) // listas dentro de un objeto 





const persona = {
    nombre: "Rodolfa",
    edad: "20",
    trbajo: "si",
    contextura: "gorda",
    juegostiene: ["RE2", "RE3", "GOW"]
}
//acceder a un atributo por variable(recordar que son strings ejp: "nombre" - "edad" - "juegos" etc)

//elijo la variable y al atributo a la que quiero acceder
const nombrecito = "nombre";

console.log(persona[nombrecito])




const razaperro ={
    edad : "5",
    color : "marron",
    raza : "chusco",

}

// console.log(razaperro.raza)

const razaaacita = "raza";
console.log(razaperro[razaaacita])  // llamando reacciando un atributo






const cuarto = {
    medidas : "3m x 5m",
    color : "white",
    material : "ladrillo"
}

// console.log(cuarto.medidas)'

const tamaño = "medidas";

console.log(cuarto[tamaño])




//funciones flecha

const suma = (a,b) =>{
    console.log(a);
    console.log(b);

    //return a+b; // una manera
    const result = a+b;
    return result
}
//asignar una variable como atributo para los parametros
const numero1 = 45;
const numero2 = 6;


console.log(suma(numero1, numero2));






const poto = () =>{
    for(let i = 1; i<31; i++){
        console.log("Numero: "+ i)
    }
}

poto()

poto()




//React


// import './App.css';

// //funcion es un (componente) y el nombre del componente tiene que iniciar en mayuscula
// const App = () =>{
//   const saludo = "hiihiii";
//   const a= 30;
//   const b = 34;
//   const suma = a+b;

//   //me va a retornar Javascript(se parece a hrml pero es JS)
//   return (
//     //parar llamar a mi variabke dentro del retorno tengo que usar "{} como netodo de llamado. a eso se le conoce como evaluacion"
//     <div className="App"> 
//       {saludo + saludo + " El pepe"}
//       {suma}

//       <h1>test</h1>
//       <p>test ppp</p>
      

//     </div>
//   );
// }

// export default App;





