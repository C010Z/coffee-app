import { useCartContext } from "../../context/CartContext"
import {Button,Table} from "react-bootstrap"
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
 




function Cart() {

   

  const { cartList, vaciarCarrito,remover} = useCartContext()
  
   
  return (
    <div>
     
     
<Table> 
<thead>
  <tr>
    <th>Nro</th>
    <th>Producto</th>
    <th>Precio</th>
    <th>Cantidad</th>
    <th>Stock</th>
    
    </tr>
</thead>
<tbody>
   
      { cartList.map(prod =>(
 
    <tr>
    <td>{prod.id}</td>
    <td>{prod.title}</td>
    <td>{prod.price}</td>
    <td>{prod.cantidad}</td>
    <td>{prod.stock -prod.cantidad}</td>
     
          <td>  <button className="btn btn-danger"onClick={()=>remover(prod.id)} >Eliminar</button></td>
       
  </tr>
 
 
))   //<Link to= "/categoria"> <Button className="btn btn-primary " >vamos a tiednda</Button></Link>
 
 }
   

  


</tbody>
</Table>
  
     
  

<Button className="btn btn-success"onClick={ vaciarCarrito} >Vaciar carro</Button>
</div>

  )
}

export default Cart
