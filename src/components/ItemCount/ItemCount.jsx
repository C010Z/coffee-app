import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import CartWigdet from "../Widget/CartWigdet";


const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }
 
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const addToCart = () => {
    onAdd(count)
  }

  return (
    <>
      <ButtonGroup aria-label="Basic example">
        <Button className="botonDecrement " onClick={handleDecrement} variant="primary">-</Button>
        <Button variant="light disabled">{count}</Button>
        <Button className="botonIncrement" onClick={handleIncrement} variant="primary">+</Button>
      </ButtonGroup>
      <br></br>
      {
        count > 0 ? <Button className="boton-asignado" onClick={  addToCart}> Añadir al
            <FontAwesomeIcon icon={faCartShopping} />
        </Button>
          :
          <Button className="boton-asignado disabled" onClick={ addToCart}>
            <CartWigdet /> </Button>
      }

    </>
  )
}

export default ItemCount