import logo from './logo.svg';
import './App.css';
import React from "react";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar />
      <main>
        <h1>¡Bienvenido en esta tienda encontraras diversos productos para tu PC!</h1>
      </main>
    </div>
  );
}

export default App;
