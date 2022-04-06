 import { getDoc,doc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react'
 import {useParams} from "react-router-dom"
import Swal from 'sweetalert2';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
//import Loading from '../../components/Loading/Loading';

 



function ItemDetailContainer() {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  const { detalleId } = useParams() 
  
  

useEffect(() => {
  async function getById(){
    try {
       const db= getFirestore()
        const item = doc(db,'items',detalleId)
      const response = await getDoc(item)

       setProducto({id:response.id,...response.data()})
      setLoading(false)
          }catch(error){
           
          }
  
}
getById()
},[detalleId])


  
  return (
    <ItemDetail producto={producto} /> 
  )
  
}


export default ItemDetailContainer
 