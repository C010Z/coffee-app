 import { useEffect, useState } from 'react'
 import {useParams} from "react-router-dom"
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import Loading from '../../components/Loading/Loading';
import { getFech } from "../../Helpers/getFech";
 



function ItemDetailContainer() {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  const { detalleId } = useParams() 
  
  useEffect(()=>{
    getFech
       .then(prod => setProducto(prod.find(prod=>prod.id=== detalleId)))
        .catch(err => console.log(err))
        
  }, [])
  
  return (
      
      <>
      <ItemDetail producto={producto} />  

      </>
  )
}


export default ItemDetailContainer
 