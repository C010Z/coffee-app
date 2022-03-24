import { useState}   from "react"
import { Button  } from "react-bootstrap";
  
 

function ItemCount  ({ stock,initial, onAdd })   {
  const [count, setCount] = useState(initial);

  const handleIncrement = ()=> {
      if(count <stock){
        setCount(count+1)
      }
  }

  const handleDecrement =()=>{ 
    if(count>initial){
        setCount(count-1)
    }
}


const nAdd = ()=> {
   alert( count)
   console.log("se agregaron al carrito :  " + count +  " productos");
}
   

  return (







<div className="boton">
            <Button className="botonDecrement " onClick={handleDecrement}> - </Button>
            <label> { count } </label>
            <Button className="botonIncrement" onClick={handleIncrement}> + </Button><br />
            <Button className="botonCart" onClick={ nAdd }>Add </Button>
        </div>

     );
  }

export default ItemCount