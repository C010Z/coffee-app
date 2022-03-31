import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])


    const addToCart = (item, qty) => {
        if (cartList.some(ele => ele.id === item.id)) {

            let index = cartList.findIndex(ele => ele.id === item.id)
            let prod = cartList[index]
            prod.qty = prod.qty + qty

            const newCart = [...cartList]
            newCart.splice(index, 1, prod)
            setCartList([...newCart])
            console.log(newCart)

        } else {
            let prod = { ...item, qty }
            setCartList([...cartList, prod])
        }

    }

    const vaciarCarrito = () => {
        setCartList([])
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
            addToCart,
            vaciarCarrito,
            remover

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
