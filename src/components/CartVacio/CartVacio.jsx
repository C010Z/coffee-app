import { Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'


function CartVacio() {
  return (
    <div>
      
      <h3>No hay productos...</h3>
     
      <Link to= "/">
          <Button>Volver a Productos</Button>
      </Link>
      
    </div>
  )
}

export default CartVacio
