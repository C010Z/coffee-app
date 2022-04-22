import { useCartContext } from "../../context/CartContext"
import { Button, Table } from "react-bootstrap"
import { Link } from "react-router-dom"



function CartBoddy() {
    const { cartList, vaciarCarrito, remover,total} = useCartContext()
     
  return (
    <>
      <Table>
            <thead>
              <tr>
                 
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              
                  {cartList.map(prod => (
                <tr>
                   
                  <td>{prod.title}</td>
                  <td>{prod.price}</td>
                  <td>{prod.cantidad}</td>
                  <td>{'$' + prod.price * prod.cantidad}</td>
                  <td>  <button className="btn btn-danger" onClick={()=>  remover(prod.id)} >Eliminar</button></td>
                </tr>
              ))
              }
            </tbody>
          </Table>
          <Button className="btn btn-success" onClick={vaciarCarrito} >Vaciar carro</Button>
        
         <div div className="container mt-3 border ">
         <div className="row -align-justify" >    
         <div className="col-12 mt-2"> 
          <div className="carrito-footer mt-2"><h3>TOTAL: ${total}</h3> 
         </div> 
           </div>
         </div>
         </div>
        
         <Link to= "/compra">
         <Button className="btn btn-success mt-3"  >Generar orden</Button>
      </Link>
      
   </>    
  )
}

export default CartBoddy