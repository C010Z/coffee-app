import { useCartContext } from "../../context/CartContext"
import { Button, Table } from "react-bootstrap"
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from "react"
function CartBoddy() {
    const { cartList, vaciarCarrito, remover,total} = useCartContext()
    const [dataForm, setDataForm] = useState({email: '', name: '', phone: ''})
   const [id, setId] = useState(null)
    const generarOrden = async (e) => {
      e.preventDefault();

          // Nuevo objeto de orders    
          let orden = {}      
      
          orden.buyer = {name: 'pepe',email: 'pepe@gmail.com', phone: '123333333'}

orden.total = total

      
          orden.items = cartList.map(prod => {
              const id = prod.id
              const producto = prod.title
              const precio = prod.price * prod.cantidad
              
              return {id, producto, precio}   
          })
          
          const db = getFirestore()
          const queryCollectionItems = collection(db, 'orders')
         await  addDoc(queryCollectionItems, orden) 
        
          .then(({ id }) => setId(id))
        .catch(err => console.log(err))
        .finally(() => vaciarCarrito())
   
        }
      
  
        
    

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
              { alert(id)}
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
      
         <Button className="btn btn-success" onClick={generarOrden} >Generar orden</Button>
            
         
   </>    
  )
}

export default CartBoddy
