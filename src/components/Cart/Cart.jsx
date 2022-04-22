import { useCartContext } from "../../context/CartContext"
import CartVacio from "../CartVacio/CartVacio"
import CartBoddy from "./CartBoddy"
 

function Cart() {
  const { cartList} = useCartContext()
 
  return (
    <div>
      {
      cartList.length === 0 ? <CartVacio />
        : <CartBoddy/>  
  }
   
    </div>
  )
  
}
export default Cart
