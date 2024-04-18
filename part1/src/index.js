import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
//se importan y se les llama modulos

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //ReactDOM renderiza la "<App/>" y me lo renderisas en ek "ELEMENTO QUE TIENE EL ID 'root'  "
  //otsea trae todo este elemento y le dice donde tiene que ir, en este caso a la carpeta public - index.html y en el id 'root'
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
