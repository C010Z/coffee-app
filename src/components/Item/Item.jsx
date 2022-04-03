import { Link } from "react-router-dom"
import ItemCount from "../../Container/ItemCount"
import '../Item/Item.css'
import { Card } from "react-bootstrap"

const onAdd = (cant) => {
    console.log(cant)
}
function Item({ prod }) {
    return (

        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">

            <div class="card p-0 overflow-hidden h-60 shadow ">
                <h5 class="card-title">{prod.title}</h5>
                <Link to={`/detalle/${prod.id}`}>
                    < img src={prod.pictureUrl} class="card-img-top img-fluid " />
                </Link>
                <div class="card-body ">

                    <p class="card-text"> ${prod.price}</p>
                    <p class="card-text">{prod.categoria}</p>

                </div>

            </div>




        </div>

    )
}

export default Item