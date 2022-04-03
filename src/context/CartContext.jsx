import { createContext, useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({ children,initial }) {

    const [cartList, setCartList] = useState([])
    const [total,setTotal] = useState(0)
    


    const addToCart = (item) => {
        const existeProd = cartList.find((exprod)=> exprod.id===item.id)
if (existeProd){
    existeProd.cantidad += item.cantidad
    setCartList([...cartList])
}
else {
    setCartList([...cartList,item])
}



    }

useEffect(() =>{
    const getTotal = ()=>{
        const res= cartList.reduce((prev,item) =>{
            return prev +(item.price* item.cantidad)
                   },0)
                   setTotal(res)
    }
    getTotal()
},[cartList])

    const vaciarCarrito = () => {
        Swal.fire({
            title: 'Vaciar Carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'El carrito a sido vaciado',
                'success'
                
              )
              setCartList([])
            }
          })

       
    }


    const remover = (id) => {
        const aux = cartList.filter((cartList) => cartList.id !== id);
        setCartList(aux)
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'))
        if (data) setCartList(data)


    }, [])
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(cartList))
    }, [cartList])



    return (
        <CartContext.Provider value={{
            cartList,
            total,
            addToCart,
            vaciarCarrito,
            remover 

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
