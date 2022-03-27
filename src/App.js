
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { lazy,Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
function App() {
  return (
    <Suspense fallback={<h1>Cargando ...</h1>} >
    <BrowserRouter>

    <div className="App">
      <NavBar />
      <Routes >    
        <Route path='/' element={<ItemListContainer mensaje="Hola proximamente nuevas novedades" />}></Route>
        <Route path="/categoria/:id"element={<ItemListContainer saludo= 'hola soy ItemListContiner'  />}                        />
<Route path='/detalle/:detalleId' element={<ItemDetailContainer />}/>
    
      <Route path='/cart' element={<Cart />}/>
      <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </div>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;