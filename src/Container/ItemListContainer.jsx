import { useEffect, useState } from "react";
import {collection,getDocs,getFirestore,query,where} from 'firebase/firestore'
 import ItemList from "../components/ItemList/ItemList";
import Loading from "../components/Loading/Loading";
import { useParams } from "react-router-dom";

function ItemListContainer() {
   
    const [loading, setLoading] = useState(true)
    const [prods, setProds] = useState([])

    const { id } = useParams()
 
   useEffect(()=> {
     
    const db = getFirestore()    

    const queryCollectionFinal =  !id 
                        ? 
                            collection(db, 'items' )
                        :  
                            query( collection(db, 'items' ), 
                                where('categoria','==', id) 
                                                                   
                            )                             

    getDocs(queryCollectionFinal)
    .then(resp => setProds( resp.docs.map(producto =>( {id: producto.id, ...producto.data()}) ) ) )
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))   
    
}, [id])   











 

    return (
        <>

            {loading ? <Loading />
                :
                <ItemList prods={prods} />

            }
            
        </>
    )
}

export default ItemListContainer