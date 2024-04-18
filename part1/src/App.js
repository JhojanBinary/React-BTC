import "./App.css";
//LO QUE ESTOY HACIENDO ES IMPORTAR TODO EL ARCHIVO PERO SOLO NECESITO EL PARRAFO DE ESE ARCHIVO DE ESE CONPONENTE
// import "./Cuerpo.js"
import Cuerpo from "./Cuerpo.js";



const Incio = () => {
  return <h1> Bienvenido</h1>
  //el h1 o cualquier cosa que quiero que retorne tiene que estar en la misma linea del return
};

const Intro = () => {
  return <h1> Descripcion de la web</h1>;
};


//espacio pq importe este comoponente "Cuerpo" a otro archivO js para llamarlo desde ahi
//SOLO ES UNA PRUEBA Y ES PARA NO CREAR COMPONENTES DENTRO DE COMPONENTES








//funcion es un (componente) y el nombre del componente tiene que iniciar en mayuscula
const App = () => {
  //me va a retornar Javascript(se parece a hrml pero es JS)
  return (

    <div className="App">
      <Incio />
      <Incio />
      <Incio />
      <Incio />
      <Incio /> <br></br>
      
      <Intro/>

      <br></br>
      
      <Cuerpo  color = "green"  mensaje="Hola mano este es un mensaje1"/>
      <Cuerpo  color = "gray"   mensaje="Este es un mensaje 2"/>
      <Cuerpo  color = "purple" mensaje = "Este es un mensaje 3" />
    </div>
  );
};

export default App;
