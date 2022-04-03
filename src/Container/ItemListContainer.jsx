import { useEffect, useState } from "react";
import { getFech } from "../Helpers/getFech";
import ItemCount from "./ItemCount"
import ItemList from "../components/ItemList/ItemList";
import Loading from "../components/Loading/Loading";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [bool, setBool] = useState(true)
    const [loading, setLoading] = useState(true)
    const [prods, setProds] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getFech// simulacion a un llamado a una api        
                .then(resp => setProds(resp.filter(prod => prod.categoria === id)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            getFech// simulacion a un llamado a una api        
                .then(resp => setProds(resp))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [id])

 

    return (
        <>

            {loading ? <Loading />
                :
                <ItemList prods={prods} />

            }
            {/*  <ItemCount initial={1} stock={10} onAdd={onAdd} />
            */}
        </>
    )
}

export default ItemListContainer