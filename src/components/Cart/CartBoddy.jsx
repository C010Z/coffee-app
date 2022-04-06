import { useCartContext } from "../../context/CartContext"
import { Button, Table } from "react-bootstrap"
function CartBoddy() {
    const { cartList, vaciarCarrito, remover,total} = useCartContext()
  return (
    <>
      <Table>
            <thead>
              <tr>
                <th>Nro</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map(prod => (
                <tr>
                  <td>{prod.id}</td>
                  <td>{prod.title}</td>
                  <td>{prod.price}</td>
                  <td>{prod.cantidad}</td>
                  <td>{'$' + prod.price * prod.cantidad}</td>
                  <td>  <button className="btn btn-danger" onClick={() => remover(prod.id)} >Eliminar</button></td>
                </tr>
              ))
              }
            </tbody>
          </Table>
          <Button className="btn btn-success" onClick={vaciarCarrito} >Vaciar carro</Button>
        
         <div div className="container -center mt-3 pd-5 - bg-warning">
         <div className="row -align-justify" >    
         <div className="col-12"> 
          <div className="carrito-footer "><h3>TOTAL: ${total}</h3> 
         </div> 
           </div>
         </div>
         </div>
         
   </>    
  )
}
export default CartBoddy
