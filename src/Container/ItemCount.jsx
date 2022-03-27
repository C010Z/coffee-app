import { useState}   from "react"
import { Button  } from "react-bootstrap";
import CartWigdet from "../components/Widget/CartWigdet";
  
function ItemCount  ({ stock,initial, onAdd })   {
  const [count, setCount] = useState(initial);

  const handleIncrement = ()=> {
      if(count <stock){
        setCount(count+1)
      }
  }

  const handleDecrement =()=>{ 
    if(count>0){
        setCount(count-1)
    }
}


const nAdd = ()=> {
   alert( count)
   console.log("se agregaron al carrito :  " + count +  " productos");
}
   

  return (
<>  
<div className="boton">
            <Button className="botonDecrement " onClick={handleDecrement}> - </Button>
            <label> { count } </label>
            <Button className="botonIncrement" onClick={handleIncrement}> + </Button><br />
         
        </div>
{
  count > 0 ? <Button className="boton-asignado" onClick={() => nAdd()}> Añadir al 
      <CartWigdet/>
   </Button>
  :
  <Button className="boton-asignado disabled" onClick={() => nAdd()}> 
  <i className="cart icon"></i>
  añadir al carrito </Button>
}

        </>
     );
  }

export default ItemCount