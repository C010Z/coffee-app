import { useEffect, useState } from "react";
import { getFech } from "../Helpers/getFech";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList/ItemList";
import Loading from "../components/Loading/Loading";

function ItemListContainer() {
    const [bool, setBool] = useState(true)
    const [loading, setLoading] = useState(true)
    const [prods, setProds] = useState([])

    useEffect(() => {
        getFech
            .then(resp => setProds(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    console.log(prods)

    return (
        <>

            {loading ? <Loading />
                :
                <ItemList prods={prods} />

            }
            <ItemCount initial={1} stock={10} />
        </>
    )
}

export default ItemListContainer