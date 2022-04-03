import { BsFillCartFill } from "react-icons/bs";
import { useCartContext } from "../../context/CartContext"



function CartWigdet() {

 
    const { cartList } = useCartContext()

    let itemIsCart = 0



    cartList.map((prod) => {
        itemIsCart = itemIsCart + prod.cantidad;
     
    })







    return (
        <> { itemIsCart===0 ?  <> <span hidden >{itemIsCart}</span> </>:
        <> <span>{itemIsCart}</span> <BsFillCartFill /> </>}
        </>
      )
}

export default CartWigdet 
 