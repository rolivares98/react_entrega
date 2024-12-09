import './App.css';
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos aqui escontraras diferentes componentes para potenciar tu PC!" />
    </div>
  );
}

export default App;