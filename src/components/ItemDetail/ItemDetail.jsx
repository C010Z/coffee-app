import { useState } from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import {Button} from "react-bootstrap"
import ItemCount from "../../Container/ItemCount"
import {Container} from "react-bootstrap"




 function ItemDetail({producto}) {
  
  const [add,setAdd] =useState(false)




  const onAdd = () => {
    setAdd(!add)
}



  return (
<center>
    <Card className="card" style={{ width: '19rem' }}>
  <Card.Img variant="top" src={producto.pictureUrl} alt="IMAGEN NO DISPONIBLE" className="  w-10 mt-3" />
  <Card.Body className="card-body">
    <Card.Title className="card-title">{producto.title}</Card.Title>
    <Card.Text className="card-text">
   <p> {producto.price} </p>
   <p>{producto.description}</p>
           </Card.Text>
   
  </Card.Body>
</Card>
<div>
  {
   add ? <div className="meta">Añadido...</div>:  <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
  }
  <Link to="/cart">
  <Button variant="success" className="btn-add"   onClick={()=> onAdd()}>Finalizar</Button> 
   </Link>
</div>

 
</center>
)

}

 
 


export default ItemDetail
