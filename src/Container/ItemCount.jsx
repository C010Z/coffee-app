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
    <div className="container d-flex justify-content-center col-1 ">
        <div className=" col-1">
          <div className="row-1">
            <div className="d-flex justify-content-center col-1">
              <Button className="btn-sm btn-primary" onClick={handleDecrement}> {" - "}</Button>
              <span className="mx-5">{count}</span>
              <Button className="btn-sm btn-primary" onClick={handleIncrement}>{" + "}</Button>
            </div>
          </div>
          <div className="row-1">
          <div className="d-flex justify-content-center col-1">
            <Button className="btn-sm btn-success" onClick={nAdd}>{" Agregar al carrito "}</Button>
            </div>
          </div>
        </div>
      </div>
   
     );
  }

export default ItemCount;