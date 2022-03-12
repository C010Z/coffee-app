import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer";
import ItemCount from "./Container/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer mensaje="Hola proximamente nuevas novedades" />
      <ItemCount />
    </div>
  );
}

export default App;
