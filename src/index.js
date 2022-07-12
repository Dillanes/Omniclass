import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//bootstrap
import "bootstrap/dist/css/bootstrap.css";
import { Omc23Provider } from "./context/omc23/ContextOmc23";
import { LoginProvider } from './context/LoginContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <LoginProvider>
    <App />
 </LoginProvider>
    
  
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
