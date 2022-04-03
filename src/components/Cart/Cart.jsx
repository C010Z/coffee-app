import { useCartContext } from "../../context/CartContext"
import { Button, Table } from "react-bootstrap"
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
import CartVacio from "../CartVacio/CartVacio"

function Cart() {

  const { cartList, vaciarCarrito, remover, total } = useCartContext()

  return (
    <div>
      {cartList.length === 0 ? <CartVacio />
        : <div>
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
        </div>
      }
      <div className="container -center mt-3 pd-5 - bg-primary">
        <div className="carrito-footer "><h3>TOTAL: ${total}</h3> </div>
      </div>
    </div>

  )

}



export default Cart
