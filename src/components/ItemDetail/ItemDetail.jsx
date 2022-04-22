import { useCartContext } from "../../context/CartContext"
import { useState } from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
 

function ItemDetail({ producto }) {

  const [isCant, setIsCant] = useState(false)
  const { addToCart } = useCartContext()

  const onAdd = (cant) => {

    addToCart({ ...producto, cantidad: cant })
    setIsCant(true)
  }

  return (
    <div>  
     <center >   
      <Card className="card-detalle" style={{ width: '20rem' }}>
        <Card.Title className="card-detalle-title">{producto.title}</Card.Title>
        <Card.Img variant="top" src={producto.pictureUrl} alt="IMAGEN NO DISPONIBLE" className="  w-5 mt-1" />
        <Card.Body className="card-detalle-body">
          <Card.Text className="card-detalle-text">
            <p> ${producto.price} </p>
            <p>{producto.description}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {isCant ?
            <>
              <Link to='/'>
                <button className='btn btn-primary'>Seguir comprando</button>
              </Link>
              <Link to='/cart'>
                <button className='btn btn-outline-success'>Ir a Cart</button>
              </Link>
            </>
            :
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />}
        </Card.Footer>
      </Card>
      </center>
      </div>
  )
}
export default ItemDetail
