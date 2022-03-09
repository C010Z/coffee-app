import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer mensaje="Hola proximamente nuevas novedades" />
    </div>
  );
}

export default App;
